import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      keyframes: { circle: { to: { 'offset-distance': '100%' } } },
      animation: {
        'spin-slow': 'circle 5s linear infinite',
        'spin-fast': 'circle 3s linear infinite',
      },
    },
  },

  // ? It seems like Next.js 13 supports only package.json setup
  // ? plugins: ['prettier-plugin-tailwindcss'],
};
export default config;
