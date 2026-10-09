import { useState } from 'react';
import Image from 'next/image';
import { projects } from '../data/portfolio';
import type { Project } from '../types/portfolio';
import Reveal from './Reveal';
import Modal from './Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="section-heading">
          <span>03.</span> Selected Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-top">
                <p className="project-label">Featured Project</p>

                <button
                  type="button"
                  className="project-link button-link"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  View
                </button>
              </div>
              <button
                type="button"
                className="clip-image"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-card-image"
                  width={760}
                  height={428}
                />
              </button>
              <h3>{project.title}</h3>
              <p>{project.oneLiner}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Modal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
      >
        {selectedProject && (
          <div className="project-modal-content">
            <div className="project-modal-image-wrap">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
                className="project-modal-image"
                width={760}
                height={428}
                priority
              />
            </div>

            <p className="project-modal-description">
              {selectedProject.description}
            </p>

            <ul className="tech-list">
              {selectedProject.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}