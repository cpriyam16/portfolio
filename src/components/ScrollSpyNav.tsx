import { navItems } from '../data/portfolio';
import SectionLink from './SectionLink';

interface ScrollSpyNavProps {
  activeSection: string;
  onNavigate?: () => void;
  className?: string;
}

export default function ScrollSpyNav({
  activeSection,
  onNavigate,
  className,
}: ScrollSpyNavProps) {
  return (
    <nav className={className} aria-label="Section navigation">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <SectionLink
            key={item.id}
            href={item.href}
            onClick={onNavigate}
            className={isActive ? "active" : ""}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </SectionLink>
        );
      })}
    </nav>
  );
}