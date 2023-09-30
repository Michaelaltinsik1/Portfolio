import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        8: '8px',
        12: '12px',
        16: '16x',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        64: '64px',
        72: '72px',
        80: '80px',
        96: '96px',
        120: '120px',
      },
      boxShadow: {
        shadow: '0px 3px 8px 0px #DAC0A3',
      },
    },
    colors: {
      primary: '#F8F0E5',
      secondary: '#EADBC8',
      tertiary: '#DAC0A3',
      'primary-invert': '#0F2C59',
      'secondary-invert': '#924607',
    },
    fontSize: {
      H1: '48px',
      H2: '32px',
      H3: '24px',
      H1Mobile: '32px',
      H2Mobile: '24px',
      H3Mobile: '20px',
      body: '16px',
      bodySmall: '14px',
      button: '20px',
    },
    lineHeight: {
      130: '130%',
      140: '140%',
      150: '150%',
    },
    letterSpacing: {
      zero: '0',
      minus: '-1%',
    },
    screens: {
      tablet: '769px',
      desktop: '1201px',
      xlDesktop: '2560px',
    },
  },
  plugins: [],
};
export default config;
