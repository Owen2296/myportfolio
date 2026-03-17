"use client";

import { useTheme } from "./providers";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        toggleTheme({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }}
      aria-label="Toggle theme"
      type="button"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "44px",
        height: "44px",
        borderRadius: "0.75rem",
        //border: '1px solid hsl(var(--border))',
        //background: 'hsl(var(--card))',
        //color: 'hsl(var(--foreground))',
        cursor: "pointer",
        transition: "all 0.2s ease",
        backdropFilter: "blur(8px)",
        padding: 0,
        font: "inherit",
        pointerEvents: "auto",
      }}
      //   onMouseEnter={(e) => {
      //     e.currentTarget.style.background = 'hsl(var(--primary) / 0.1)';
      //     e.currentTarget.style.borderColor = 'hsl(var(--primary))';
      //   }}
      //   onMouseLeave={(e) => {
      //     e.currentTarget.style.background = 'hsl(var(--card))';
      //     e.currentTarget.style.borderColor = 'hsl(var(--border))';
      //   }}
    >
      {theme === "light" ? (
        <Moon size={20} strokeWidth={2} />
      ) : (
        <Sun size={20} strokeWidth={2} />
      )}
    </button>
  );
}
