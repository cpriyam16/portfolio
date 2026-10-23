export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  tech: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export type ThemeMode = 'dark' | 'light';