import ThemeToggle from './ThemeToggle';
import { socialLinks } from '../data/portfolio';
import type { ThemeMode } from '../types/portfolio';
import ScrollSpyNav from './ScrollSpyNav';
import SectionLink from './SectionLink';

interface SidebarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
}

export default function Sidebar({
  theme,
  onToggleTheme,
  activeSection,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <div>
          <SectionLink href="#hero" className="brand">
            Priyam Chakraborty
          </SectionLink>

          <p className="sidebar-title">Web Engineer &amp; Technology Consultant</p>

          <ScrollSpyNav activeSection={activeSection} className="nav" />
        </div>

        <div className="sidebar-footer">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <div className="socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}