import Image from 'next/image';
import { DiPhotoshop } from 'react-icons/di';
import { FaCss3Alt } from 'react-icons/fa';
import {
  SiDotnet, SiFigma, SiGit, SiGoogleanalytics, SiHtml5, SiHubspot,
  SiIntercom, SiJavascript, SiJquery, SiLess, SiNextdotjs, SiReact, SiClaude,
  SiSass, SiShopify, SiTypescript,
} from 'react-icons/si';
import Reveal from './Reveal';

const technologies = [
  { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#d4ad00' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178c6' },
  { name: 'React', Icon: SiReact, color: '#149eca' },
  { name: 'Next.js', Icon: SiNextdotjs, color: 'var(--text)' },
  { name: '.NET', Icon: SiDotnet, color: '#7544a0' },
  { name: 'Figma', Icon: SiFigma, color: '#f24e1e' },
  { name: 'Sass', Icon: SiSass, color: '#cc6699' },
  { name: 'Less', Icon: SiLess, color: '#1d365d' },
  { name: 'jQuery', Icon: SiJquery, color: '#0769ad' },
  { name: 'Git', Icon: SiGit, color: '#f05032' },
  { name: 'Shopify', Icon: SiShopify, color: '#7ab55c' },
  { name: 'HubSpot', Icon: SiHubspot, color: '#ff7a59' },
  { name: 'Photoshop', Icon: DiPhotoshop, color: '#31a8ff' },
  { name: 'Intercom', Icon: SiIntercom, color: '#286efa' },
  { name: 'Google Analytics', Icon: SiGoogleanalytics, color: '#e37400' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="section-heading">
          <span>01.</span> About Me
        </h2>

        <div className="card about-card">
          <p className="about-lead">
            I believe the best digital work starts by asking better questions.
            As a <strong>developer and consultant</strong>, I connect vision with
            execution, helping turn good ideas into experiences that feel simple,
            useful, and lasting.
          </p>

          <p>
            I enjoy the space where people, design, and technology meet. Sometimes
            that means getting hands-on and building something from the ground up.
            Other times it means bringing clarity to a challenge, helping a team
            find its direction, or making an existing experience work better.
          </p>

          <p>
            What keeps me going is the possibility of doing things differently.
            I&apos;m always exploring new ideas and tools, staying open to change,
            and looking for thoughtful ways to make what comes next even better.
          </p>

          <div className="about-pillars">
            <div className="about-pillar">
              <div className="pillar-header">
                <span className="pillar-icon">💻</span>
                <h3>The Engineer</h3>
              </div>
              <p>
                I turn ambitious ideas into dependable digital experiences,
                balancing the details people notice with the foundations they don&apos;t.
              </p>
              <ul className="pillar-tags">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>.NET</li>
                <li>Accessibility (WCAG)</li>
                <li>Performance</li>
              </ul>
            </div>

            <div className="about-pillar">
              <div className="pillar-header">
                <span className="pillar-icon">🎨</span>
                <h3>The Designer</h3>
              </div>
              <p>
                I look for the human side of every challenge, bringing clarity,
                intention, and a sense of ease to the way things look and feel.
              </p>
              <ul className="pillar-tags">
                <li>Figma</li>
                <li>UI/UX Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>

            <div className="about-pillar">
              <div className="pillar-header">
                <span className="pillar-icon">🚀</span>
                <h3>The Consultant</h3>
              </div>
              <p>
                I help people see the bigger picture, find common ground, and move
                forward with confidence when the next step isn&apos;t obvious.
              </p>
              <ul className="pillar-tags">
                <li>Tech Strategy</li>
                <li>Agile / Scrum</li>
                <li>Team Leadership</li>
                <li>Generative AI</li>
                <li>Delivery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card technologies-card">
          <h3>Technologies &amp; tools</h3>
          <ul className="technology-pills">
            {technologies.map(({ name, Icon, color }) => (
              <li className="technology-pill" key={name}>
                <Icon aria-hidden="true" style={{ color }} />
                <span>{name}</span>
              </li>
            ))}
            <li className="technology-pill">
              <Image src="/chatgpt.svg" alt="" width={20} height={20} unoptimized />
              <span>ChatGPT</span>
            </li>
            <li className="technology-pill">
              <SiClaude aria-hidden="true" style={{ color: '#d97757' }} />
              <span>Claude</span>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}