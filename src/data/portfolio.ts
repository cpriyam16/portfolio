import type { ExperienceItem, Project, SocialLink } from '../types/portfolio';
import pixCityImg from '../assets/images/pix-city.jpg';
import fourPxlImg from '../assets/images/4pxl.png';
import biocharImg from '../assets/images/biocharinnovations.jpg';
import verahJewelsImg from '../assets/images/verah-jewels.jpg';
import treequeueImg from '../assets/images/treequeue.png';
import plusMinusImg from '../assets/images/plus-minus.jpg';
import tapriProjectImg from '../assets/images/tapri-project.jpg';

export const projects: Project[] = [
  {
    id: "tapri-project",
    title: "Tapri Project",
    oneLiner: "A nostalgic web experience that brings retro radio playlists to listeners.",
    description:
      "The Tapri Project is a nostalgic web experience that curates retro radio playlists and brings the sounds of past decades to listeners. Built with React and TypeScript, it offers a simple way to discover carefully selected tracks and enjoy a unique auditory journey.",
    tech: ["react", "typescript", "tailwindcss", "vite", "restApi"],
    image: tapriProjectImg,
    githubLink: "https://github.com/cpriyam16/Tapri",
    liveLink: "https://priyamchakraborty.com/tapri/"
  },
  {
    id: "verah-jewels",
    title: "Vérah Jewels",
    oneLiner: "A luxury jewelry e-commerce showcase designed for timeless elegance and product discovery.",
    description:
      "Vérah is a luxury jewelry e-commerce website built with Shopify to elevate brand storytelling and product discovery. It features refined typography, responsive product galleries, and a high-end editorial shopping experience, with a focus on sustainability.",
    tech: ["Shopify", "Javascript", "E-Commerce Design", "Third-party integrations", "Customisable Widgets"],
    image: verahJewelsImg,
    liveLink: "https://verahjewels.com/"
  },
  {
    id: "pix-city",
    title: "Pix.city Website",
    oneLiner: "A polished agency website focused on usability, local visibility, and visual clarity.",
    description:
      "Pix.city is a digital marketing and communications agency based in Paris and London. It helps businesses improve local visibility on Google and social media through local content, advertising, and community management. The website presents these services in a polished, responsive experience.",
    tech: ["Figma", "React", "Symfony", "UX/UI", "Responsive Design", "Accessibility", "PPC ads"],
    image: pixCityImg,
  },
  {
    id: "4pxl",
    title: "4pxl Website",
    oneLiner: "A scalable website frontend built with reusable UI patterns.",
    description:
      "The 4pxl website features a strong frontend structure centered on reusable components, visual consistency, and maintainable code. The work emphasizes clean UI engineering, scalable styling patterns, and a responsive experience across devices.",
    tech: ["Frontend Development", "Design Systems", "UI Engineering"],
    image: fourPxlImg,
  },
  {
    id: "biochar",
    title: "Biochar Innovations",
    oneLiner: "A website showcasing biochar-enhanced concrete and sustainable building materials.",
    description:
      "The Biochar Innovations Pte. Ltd. website showcases biochar-enhanced concrete technology and sustainable construction materials. It combines intuitive data storytelling and responsive visuals with a high-performance frontend.",
    tech: ["Web Applications", "Responsive Design", "UI Engineering"],
    image: biocharImg,
  },
  {
    id: "treequeue",
    title: "TreeQueue",
    oneLiner: "A recruitment and talent management platform connecting organizations with experts.",
    description:
      "TreeQueue is a talent recruitment and management platform with streamlined workflows across desktop, tablet, and mobile. Its modern web interfaces support intuitive candidate matching, high performance, and smooth cross-device user journeys.",
    tech: ["React", "Component Architecture", "Mobile First", "TypeScript"],
    image: treequeueImg,
  },
  {
    id: "plus-minus",
    title: "The +- Code",
    oneLiner: "An educational platform helping children develop leadership and emotional intelligence.",
    description:
      "The +- Code is a mobile and web education platform offering leadership programs rooted in emotional intelligence (EQ). Designed for young learners, it combines engaging visuals, accessible navigation, and interactive learning journeys.",
    tech: ["Mobile Web", "UX Engineering", "Interactive UI"],
    image: plusMinusImg,
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Senior Consultant – Web Application Engineer",
    company: "Arcadis",
    period: "Nov 2025 – Present",
    description:
      "Leading modernisation of enterprise web applications for global clients across Germany, the Netherlands, and the US. Driving full delivery lifecycle — from requirements and roadmaps to sprint planning, stakeholder alignment, and production. Serving as Scrum Master while mentoring development teams through code reviews and engineering best practices.",
    tech: ["React", "TypeScript", ".NET", "Agile / Scrum", "Figma", "Cloud", "Accessibility", "Generative AI"],
  },
  {
    title: "Senior Front End Engineer",
    company: "Jellyfish",
    period: "Oct 2021 – Apr 2025",
    description:
      "Spearheaded frontend development across high-impact product initiatives — cutting time-to-market by 35% and improving product quality by 28% through agile delivery. Revamped a reporting visualisation dashboard, dramatically improving usability and user engagement. Winner of the Google × Jellyfish Hackathon 2023, Paris.",
    tech: ["React.js", "TypeScript", "ChatGPT / AI", "Agile", "Figma", "Data Visualisation", "Performance Optimisation"],
  },
  {
    title: "Lead UI Developer",
    company: "EDIT-PLACE",
    period: "Apr 2019 – Sep 2021",
    description:
      "Led a cross-functional team of 7 — designers, frontend/backend developers, and DevOps engineers — delivering high-quality digital products. Hands-on with CI/CD pipelines, API Gateway integration, and third-party tool adoption including Intercom, SendGrid, and Google Analytics. Also contributed as a Web UI Developer from 2017, building a full CMS platform from scratch.",
    tech: ["React", "Figma", "CI/CD", "Git", "API Integration", "Wireframing", "Agile"],
  },
  {
    title: "Web Developer",
    company: "Replicon",
    period: "Mar 2015 – May 2017",
    description:
      "Built dynamic web applications and marketing landing pages integrated with HubSpot. Restructured SEO metadata and enhanced site performance, contributing to measurable improvements in search visibility. Collaborated closely with marketing and design teams throughout.",
    tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Sass / LESS", "HubSpot", "SEO"],
  },
  {
    title: "Associate Web Developer",
    company: "Thomson Reuters",
    period: "Apr 2012 – Mar 2015",
    description:
      "Designed and implemented responsive web applications, migrating multiple client sites to new servers with HTML5 & CSS3 upgrades. Worked alongside the SEO team to improve page visibility and performance. A formative period building strong fundamentals in cross-browser UI engineering.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO", "Adobe Photoshop"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/cpriyam16",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyam16/",
  },
  {
    label: "Blogs",
    href: "https://priyamjots.blogspot.com/",
  },
];

export const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Blogs", href: "#blogs", id: "blogs" },
  { label: "Contact", href: "#contact", id: "contact" },
];