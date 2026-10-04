import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <Reveal>
        <p className="eyebrow">Developer · Consultant · Curious Thinker</p>
        <h1>Priyam Chakraborty.</h1>
        <h2>Ideas made useful. Experiences made human.</h2>
        <p className="hero-copy">
          I bring a builder&apos;s mindset and a consultant&apos;s perspective to digital
          challenges. From shaping the first idea to making the final details feel
          effortless, I help create experiences that people want to come back to.
          I&apos;m always learning, always evolving, and always looking for a better way forward.
        </p>

        <div className="hero-badges">
          <span className="hero-badge">Built with purpose</span>
          <span className="hero-badge">Designed around people</span>
          <span className="hero-badge">Guided by experience</span>
          <span className="hero-badge">Driven by curiosity</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="button primary">
            Explore My Work
          </a>
          <a href="#contact" className="button secondary">
            Let&apos;s Build Something
          </a>
          <a
            href="https://www.linkedin.com/in/priyam16/"
            target="_blank"
            rel="noreferrer"
            className="button secondary"
            aria-label="Connect on LinkedIn"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}