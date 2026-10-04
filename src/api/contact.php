<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

function respond(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}

function cleanInput(?string $value): string
{
    return trim((string) $value);
}

$name = cleanInput(is_string($_POST['name'] ?? null) ? $_POST['name'] : '');
$email = cleanInput(is_string($_POST['email'] ?? null) ? $_POST['email'] : '');
$message = cleanInput(is_string($_POST['message'] ?? null) ? $_POST['message'] : '');
$company = cleanInput(is_string($_POST['company'] ?? null) ? $_POST['company'] : '');

$errors = [];

/**
 * Honeypot check
 */
if ($company !== '') {
    respond(400, [
        'success' => false,
        'message' => 'Spam detected.',
        'errors' => [
            'honeypot' => 'Spam detected.',
        ],
    ]);
}

/**
 * Basic validation
 */
if ($name === '') {
    $errors['name'] = 'Please enter your name.';
} elseif (mb_strlen($name) < 2) {
    $errors['name'] = 'Name must be at least 2 characters.';
}

if ($email === '') {
    $errors['email'] = 'Please enter your email address.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address.';
}

if ($message === '') {
    $errors['message'] = 'Please enter your message.';
} elseif (mb_strlen($message) < 10) {
    $errors['message'] = 'Message must be at least 10 characters.';
}

if (!empty($errors)) {
    respond(422, [
        'success' => false,
        'message' => 'Validation failed.',
        'errors' => $errors,
    ]);
}

$safeName = str_replace(["\r", "\n"], ' ', $name);
$subject = 'New portfolio contact message from ' . $safeName;

$emailBody = "You received a new message from your portfolio contact form.\n\n";
$emailBody .= "Name: {$safeName}\n";
$emailBody .= "Email: {$email}\n\n";
$emailBody .= "Message:\n{$message}\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Reply-To: ' . $email,
];

if (!mail('thepriyam.me@gmail.com', $subject, $emailBody, implode("\r\n", $headers))) {
    respond(500, [
        'success' => false,
        'message' => 'Unable to send email right now.',
        'errors' => [
            'submit' => 'Something went wrong. Please try again later.',
        ],
    ]);
}

respond(200, [
    'success' => true,
    'message' => 'Message sent successfully.',
]);
