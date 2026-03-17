"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
  isAnimating: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeViewTransition = {
  finished: Promise<void>;
};

type ThemeDocument = Document & {
  startViewTransition?: (
    updateCallback: () => void | Promise<void>,
  ) => ThemeViewTransition;
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      applyTheme(initialTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const htmlElement = document.documentElement;
    // Set data attribute for CSS to respond to
    htmlElement.setAttribute("data-theme", newTheme);
    // Also set color-scheme for browser defaults
    htmlElement.style.colorScheme = newTheme;
  };

  const toggleTheme = (origin?: { x: number; y: number }) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newTheme = theme === "light" ? "dark" : "light";

    const htmlElement = document.documentElement;
    if (origin) {
      htmlElement.style.setProperty("--theme-transition-x", `${origin.x}px`);
      htmlElement.style.setProperty("--theme-transition-y", `${origin.y}px`);
    } else {
      htmlElement.style.setProperty(
        "--theme-transition-x",
        "calc(100% - 2.25rem)",
      );
      htmlElement.style.setProperty("--theme-transition-y", "2.25rem");
    }

    const applyNextTheme = () => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const documentWithTransition = document as ThemeDocument;
    if (
      prefersReducedMotion ||
      typeof documentWithTransition.startViewTransition !== "function"
    ) {
      applyNextTheme();
      setIsAnimating(false);
      return;
    }

    htmlElement.setAttribute("data-theme-transitioning", "true");

    const transition =
      documentWithTransition.startViewTransition(applyNextTheme);

    const finalizeTransition = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.setTimeout(() => {
            htmlElement.removeAttribute("data-theme-transitioning");
            setIsAnimating(false);
          }, 120);
        });
      });
    };

    transition.finished.finally(finalizeTransition);
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
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
