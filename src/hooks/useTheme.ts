import { useEffect, useState } from 'react';
import type { ThemeMode } from '../types/portfolio';

const STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME: ThemeMode = 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(DEFAULT_THEME);

  useEffect(() => {
    // On mount, load from localStorage
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initialTheme = savedTheme ?? DEFAULT_THEME;
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: ThemeMode = prev === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, next);
        document.documentElement.dataset.theme = next;
      }
      return next;
    });
  };

  return { theme, toggleTheme };
}