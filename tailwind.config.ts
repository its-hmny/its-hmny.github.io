import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        theme_primary: colors.orange,
        theme_secondary: colors.lime,
        theme_bg: colors.black,
        theme_bg_accent: colors.neutral['900'],
        theme_fg: colors.white,
        theme_fg_accent: colors.gray['500'],
      },

      boxShadow: {
        glowing_primary: `0px 0px 15px 5px ${colors.orange[500]}`,
        glowing_secondary: `0px 0px 15px 5px ${colors.lime[500]}`,
      },

      keyframes: { circle: { to: { 'offset-distance': '100%' } } },
      animation: {
        'spin-slow': 'circle 5s linear infinite',
        'spin-fast': 'circle 3s linear infinite',
      },
    },
  },
};

export default config;
