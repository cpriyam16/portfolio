import { useState } from 'react';
import Modal from './Modal';
import Reveal from './Reveal';

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string;
  submit?: string;
};

const API_ENDPOINT = "/contact.php";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm(formData: FormData): FormErrors {
    const nextErrors: FormErrors = {};

    const name = (formData.get("name") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";
    const message = (formData.get("message") as string | null)?.trim() || "";
    const honeypot = (formData.get("company") as string | null)?.trim() || "";

    if (!name) {
      nextErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      nextErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!email.includes('@') || !email.includes('.')) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message) {
      nextErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    if (honeypot) {
      nextErrors.honeypot = "Spam detected.";
    }

    return nextErrors;
  }

  function clearFieldError(field: keyof FormErrors) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      return { ...prev, [field]: undefined, submit: undefined };
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrors(result.errors ?? {
          submit: result.message || "Something went wrong. Please try again in a moment.",
        });
        return;
      }

      setStatus("success");
      setErrors({});
      form.reset();
    } catch {
      setStatus("error");
      setErrors({
        submit: "Something went wrong. Please try again in a moment.",
      });
    }
  }

  return (
    <section id="contact" className="section contact">
      <Reveal>
        <h2 className="section-heading">
          <span>05.</span> Contact
        </h2>

        <div className="card contact-card">
          <p className="contact-intro">
            Have a product to build, a web experience to improve, or a team facing
            a difficult technical decision? Tell me what you&apos;re working on.
            I&apos;d love to explore how I can help, whether that means getting into
            the code or helping shape the way forward. You can also find me on{" "}
            <a
              href="https://www.linkedin.com/in/priyam16/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              LinkedIn
            </a>{'.'}
          </p>

          <p className="contact-note">
            Your message will be sent securely to my inbox.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="honeypot-field" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={() => clearFieldError("name")}
                />
                {errors.name && (
                  <p id="name-error" className="field-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearFieldError("email")}
                />
                {errors.email && (
                  <p id="email-error" className="field-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me a bit about your project or idea..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={() => clearFieldError("message")}
              />
              {errors.message && (
                <p id="message-error" className="field-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {errors.submit && (
              <p className="field-error" role="alert">
                {errors.submit}
              </p>
            )}

            {errors.honeypot && (
              <p className="field-error" role="alert">
                {errors.honeypot}
              </p>
            )}

            <div className="contact-actions">
              <button
                type="submit"
                className="button primary"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        <Modal
          isOpen={status === "success"}
          onClose={() => setStatus("idle")}
          title="Thank you!"
        >
          <p>Your message has been sent successfully.</p>
        </Modal>

        <div className="contact-bottom-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            LinkedIn
          </a>

          <a
            href="https://priyamjots.blogspot.com/"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            Blogs
          </a>
        </div>
      </Reveal>
    </section>
  );
}