import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import type { ThemeMode } from '../types/portfolio';
import ScrollSpyNav from './ScrollSpyNav';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
}

export default function Header({
  theme,
  onToggleTheme,
  activeSection,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="mobile-header">
      <a href="#hero" className="brand">
        Priyam Chakraborty
      </a>

      <div className="mobile-header-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ScrollSpyNav
        activeSection={activeSection}
        onNavigate={handleNavClick}
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
      />
    </header>
  );
}