"use client";

export function ThemeTransition() {
  return (
    <style>{`
      ::view-transition-group(root),
      ::view-transition-image-pair(root),
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none;
        mix-blend-mode: normal;
      }

      ::view-transition-old(root) {
        z-index: 1;
        opacity: 1;
      }

      ::view-transition-new(root) {
        z-index: 2;
        opacity: 1;
        will-change: clip-path;
        backface-visibility: hidden;
        clip-path: circle(0 at var(--theme-transition-x, calc(100% - 2.25rem)) var(--theme-transition-y, 2.25rem));
        animation: theme-radial-reveal 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      @keyframes theme-radial-reveal {
        to {
          clip-path: circle(220vmax at var(--theme-transition-x, calc(100% - 2.25rem)) var(--theme-transition-y, 2.25rem));
        }
      }

      @media (prefers-reduced-motion: reduce) {
        ::view-transition-new(root) {
          clip-path: none;
          animation: none;
        }
      }
    `}</style>
  );
}
