import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1rem',
        },
      },
      colors: {
        // blue-50: #eff6ff;
        // neutral-50: #fafafa;
        // neutral-400: #a3a3a3;
        // neutral-500: #737373;
        'neutral-150': '#D9D9D9',
        'orange-550': '#FF6800',
        'cyan-650': '#0099B9',
        'cyan-750': '#177493',
      },
    },
  },
  plugins: [],
};
export default config;
