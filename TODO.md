# TODO

## 3D Model Optimizations

Ideas for making the heavy 3D models leaner, especially on mobile and low-end
devices. These stack on top of the core "don't mount on mobile" approach
(`next/dynamic` with `ssr: false` + a client-side media-query gate).

- [ ] **Lazy-load on scroll, even on desktop** — wrap each model's mount in an
      `IntersectionObserver` so a model only loads when its section enters the
      viewport, and optionally unmount it when it leaves to free GPU memory. This
      way desktop initially loads only the hero model instead of all four.

- [ ] **Single shared `<Canvas>` via drei `<View>`** — see `TODO(hmny)` in
      `src/app/page.tsx`. Each `<Canvas>` is a separate WebGL context (browsers
      cap these at ~8–16, each memory-heavy). Consolidating the 3–4 contexts into
      one is a large GPU/memory win on desktop.

- [ ] **Device-aware gating (not just viewport width)** — extend the media-query
      hook to also check `navigator.connection.saveData`, `navigator.deviceMemory`,
      and `prefers-reduced-motion`, so 3D is skipped on low-end / data-saver
      clients even when the screen is technically wide enough.

- [ ] **Poster-image fallback on mobile** — instead of rendering `null`, show a
      static WebP screenshot of the model so the two-column layout still looks
      intentional, at zero JS/WebGL cost.

- [ ] **Asset optimization (helps desktop too)** — apply Draco/meshopt
      compression, convert `Phone.gltf` to binary `.glb`, use KTX2 texture
      compression, and self-host the Draco decoder instead of pulling it from
      Google's gstatic CDN. `StormTrooper.glb` (1MB) is the obvious first target.

### Known limitation of the current `<Lazy>` gate

`src/components/Lazy.tsx` mounts the models only on desktop, so on mobile there is
no WebGL context, no GPU memory, no three.js execution and no `.glb` download — the
bulk of the runtime footprint. **However**, Next's App Router (`output: export`)
still preloads the three.js JS chunk (~870KB, downloaded + parsed but never executed)
on this route, because it eagerly preloads every chunk reachable via `import()` — via
both `<script>` tags and the RSC flight manifest. Verified that no lazy-import
technique (`next/dynamic`, `React.lazy`, `useEffect`+`import()`, computed specifiers,
nested indirection, or stripping the `<script>` tags) removes that download.

- [ ] **Truly zero three.js on mobile** — the only way to drop that ~870KB is to move
      the 3D code out of the home route's module graph entirely, e.g. render the
      models in a separate route embedded via a desktop-only `<iframe>`. Bigger change
      (extra route + layout/styling), deferred for now.
