'use client';

import { type ComponentType, type ReactNode, useEffect, useState } from 'react';

type Props = Readonly<{
  // When `false` the model is never mounted: no WebGL context, no three.js execution,
  // and no .glb fetch. See the note below on what this does — and does not — avoid.
  enabled: boolean;
  // File name (without extension) of the model under `src/components/3d_models`.
  name: string;
  // Shown while disabled, and while the chunk loads once enabled (spinner, poster, ...).
  fallback?: ReactNode;
}>;

// Mounts a heavy, client-only 3D model ONLY when `enabled` is true (typically desktop).
// The model's `import()` fires from an effect, so its .glb assets, WebGL context, GPU
// memory and three.js *execution* never happen on mobile — that is the bulk of the
// runtime footprint.
//
// Caveat worth knowing: with Next's App Router + `output: export`, the three.js JS chunk
// itself is still preloaded (downloaded + parsed, though never executed) on every route
// that references it, because Next eagerly preloads all chunks reachable via `import()`
// — both via `<script>` tags and the RSC flight manifest. No lazy-import technique
// avoids that download; only moving the 3D code out of this route entirely (e.g. an
// iframe sub-route) would. See TODO.md.
export default function Lazy({ enabled, name, fallback = null }: Props) {
  const [Component, setComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!enabled || Component) return;

    let alive = true;
    void import(`./3d_models/${name}`).then(mod => alive && setComponent(() => mod.default));
    return () => void (alive = false);
  }, [enabled, name, Component]);

  if (!enabled) return <>{fallback}</>;
  return Component ? <Component /> : <>{fallback}</>;
}
