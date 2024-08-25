import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate': 'rotate 20s linear infinite',
        'rotate-reverse': 'rotate 25s linear infinite reverse',
        'rotate-mid': 'rotate 22s linear infinite',
        'morph': 'morph 10s ease-in-out infinite alternate',
        'morph-slow': 'morph 15s ease-in-out infinite alternate',
        'morph-mid': 'morph 12s ease-in-out infinite alternate',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        morph: {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
          '50%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%' },
          '75%': { borderRadius: '40% 60% 60% 40% / 60% 60% 40% 40%' },
          '100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
        }
      },
    },
  },
  plugins: [],
};

export default config;
