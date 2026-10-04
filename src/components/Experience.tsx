import { experience } from '../data/portfolio';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <h2 className="section-heading">
          <span>02.</span> Experience
        </h2>

        <p>
          From hands-on web development to leading teams and advising clients,
          each role has shaped how I solve problems today.
        </p>

        <div className="timeline">
          {experience.map((item, index) => (
            <div
              className="timeline-reveal"
              key={`${item.company}-${item.title}-${item.period}`}
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <article className="timeline-entry card">
                <div className="timeline-dot" aria-hidden="true" />

                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="timeline-company">{item.company}</p>
                    </div>

                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <p className="timeline-description">{item.description}</p>

                  <ul className="tech-list">
                    {item.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}