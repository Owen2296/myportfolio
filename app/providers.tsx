'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const htmlElement = document.documentElement;
    // Set data attribute for CSS to respond to
    htmlElement.setAttribute('data-theme', newTheme);
    // Also set color-scheme for browser defaults
    htmlElement.style.colorScheme = newTheme;
  };

  const toggleTheme = () => {
    setIsAnimating(true);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Apply theme after animation starts (at 300ms mark) for smooth reveal
    const timerId = setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    }, 300);
    
    // Reset animation state after animation completes
    const resetTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    
    return () => {
      clearTimeout(timerId);
      clearTimeout(resetTimer);
    };
  };

  // Prevent flickering on page load by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
