import type { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  tech: string[];
  image: StaticImageData | string;
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

export type ThemeMode = "dark" | "light";