'use client';

import { useSyncExternalStore } from 'react';

// SSR-safe media-query hook. On the server (and during the very first client render,
// while hydrating the statically-exported HTML) it reports `false`, so nothing that
// depends on it mounts until we're on the client and can actually read `matchMedia`.
// `useSyncExternalStore` keeps React in sync with the MediaQueryList without tripping
// hydration mismatches.
export function useMediaQuery(query: string): boolean {
  const subscribe = (onChange: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  };

  const getSnapshot = () => window.matchMedia(query).matches;
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// `lg` is Tailwind's 1024px breakpoint — the same one the page uses via `max-lg:*`
// to collapse the two-column layout. Above it we render the heavy 3D models.
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
