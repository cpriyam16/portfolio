# Priyam Portfolio

A portfolio built with React 18, TypeScript, and Vite, with a PHP contact form for shared hosting.

## Local development

Use Node.js 22 LTS or newer with npm:

```sh
npm install
npm run dev
```

Open the URL printed by Vite. The development server does not execute PHP.

## Production build

```sh
npm run build
```

This type-checks the project and creates an upload-ready `dist/` directory containing:

```text
dist/
  index.html
  contact.php
  assets/
  ...public assets
```

The build automatically includes [the contact handler](src/api/contact.php). It is intentionally outside `public/` so the development server cannot expose its PHP source as a static asset.

Use `npm run preview` to inspect the static build locally. Vite preview does not execute PHP either; test the contact form only on a PHP-enabled server.

## Deploy to GoDaddy cPanel

No Node.js process, npm installation, or build command is needed on the hosting server.

1. Run `npm run build` locally.
2. In cPanel, open **File Manager** and navigate to the domain's document root (usually `public_html/`; addon domains may use a different directory).
3. Upload the **contents** of `dist/` into that directory, not the `dist/` directory itself. Alternatively, ZIP the contents, upload the ZIP, and extract it directly into the document root.
4. Confirm `index.html`, `contact.php`, and `assets/` are together in the document root. Remove the uploaded ZIP after extraction. If an old `index.php` or hosting placeholder takes precedence over `index.html`, back it up and remove or rename that specific placeholder.
5. Select a currently supported PHP version (PHP 8.2 or newer) in cPanel, enable `mbstring`, and confirm outgoing PHP `mail()` is supported by your hosting plan.
6. Enable HTTPS for the domain, open the site, and check that images, styling, navigation, and the contact form work.
7. Send a real test message and check the recipient's inbox and spam folder.

Relative asset and contact-handler URLs also support deployment in a subdirectory, such as `public_html/portfolio/`. Visit that directory with a trailing slash (`https://example.com/portfolio/`).

This is a single-page site using section anchors; no SPA rewrite rule or custom `.htaccess` is required. Preserve unrelated hosting configuration and files.

Section navigation, brand links, and hero action links scroll without changing the browser URL or adding history entries. Active navigation highlighting follows the visible section. Scrolling respects the reduced-motion preference.

After future changes, rebuild and replace the deployed files with the new contents of `dist/`. PHP-only changes also require rebuilding or uploading the updated handler as `contact.php`.

### Optional ZIP packaging on Windows

After building, run this in PowerShell from the project directory (using the `tar` included with modern Windows):

```powershell
tar -a -c -f .\portfolio-cpanel.zip -C .\dist .
```

The ZIP has `index.html` at its root and portable paths for Linux hosting, ready to extract into the domain's document root.

## Contact form delivery

The form posts to `contact.php` alongside the site. PHP validates submissions, checks a honeypot, and calls the hosting server's `mail()` function to send to `thepriyam.me@gmail.com`, with the visitor's email as Reply-To. It does not authenticate with Gmail or require Composer.

A successful `mail()` call means the hosting server accepted the message, not that Gmail delivered it. If sending fails or messages do not arrive, ask GoDaddy to verify outgoing mail and the domain's mail configuration. Some plans require a domain-based sender or authenticated SMTP; that setup depends on your hosting account.

## Contact

Use the website contact form, [LinkedIn](https://www.linkedin.com/in/priyam16/), or [the blog](https://priyamjots.blogspot.com/).
