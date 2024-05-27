/** @type {import('next').NextConfig} */
const config = {
  output: 'export', // Opt-in to static site genration (since we deploy on GitHub pages)

  // ! A must do operation when having <Suspense /> boundaries in a static generated site (SSG)
  // ! https://nextjs.org/docs/app/building-your-application/deploying#streaming-and-suspense
  headers: async () => [{ source: '/:path*{/}?', headers: [{ key: 'X-Accel-Buffering', value: 'no' }] }],
};

export default config;
