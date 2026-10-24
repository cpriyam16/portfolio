import { socialLinks } from '../data/portfolio';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <h2 className="section-heading">
          <span>05.</span> Contact
        </h2>

        <div className="card contact-card">
          <p className="contact-intro">
            Have a digital product to build, a web application to improve, or a
            technical challenge to work through? I&apos;d love to hear from you.
          </p>

          <a className="button primary" href="mailto:thepriyam.me@gmail.com">
            Email me
          </a>
        </div>
      </Reveal>
      <div className="contact-bottom-links" aria-label="More ways to connect">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="button secondary"
          >
            {link.label}
          </a>
          ))}
      </div>
    </section>
  );
}
