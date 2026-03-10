'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import with ssr: false to ensure client-only rendering
const ThemeToggle = dynamic(() => import('./theme-toggle').then(mod => mod.ThemeToggle), { 
  ssr: false 
});

const ThemeTransition = dynamic(() => import('./theme-transition').then(mod => mod.ThemeTransition), { 
  ssr: false 
});

export function ThemeClientComponents() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Theme Transition Animation */}
      <ThemeTransition />
      
      {/* Theme Toggle Button */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 999,
        pointerEvents: 'auto',
      }}>
        <ThemeToggle />
      </div>
    </>
  );
}
