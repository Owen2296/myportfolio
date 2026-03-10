'use client';

import { useTheme } from './providers';
import { useEffect, useState } from 'react';

export function ThemeTransition() {
  const { isAnimating } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isAnimating]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 998,
      }}
    >
      <svg
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <mask id="circleMask">
            <rect width="100%" height="100%" fill="black" />
            <circle
              cx="100%"
              cy="0%"
              r="0"
              fill="white"
              style={{
                animation: 'growCircle 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
              }}
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="currentColor"
          opacity="0.5"
          mask="url(#circleMask)"
          style={{
            animation: 'fadeOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
          }}
        />
      </svg>
      <style>{`
        @keyframes growCircle {
          0% {
            r: 0px;
          }
          100% {
            r: 150%;
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
