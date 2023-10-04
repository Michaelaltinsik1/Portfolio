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
        shadowCustom: '0px 3px 8px 0px #DAC0A3',
      },
    },
    gridTemplateColumns: {
      'cols-2': 'repeat(2,1fr)',
    },
    gridTemplateRows: {
      'rows-3': 'repeat(3,fit)',
    },
    colors: {
      primary: '#F8F0E5',
      secondary: '#EADBC8',
      tertiary: '#DAC0A3',
      'primary-invert': '#0F2C59',
      'primary-invert-hover': '#0d2750',
      'primary-invert-active': '#0c2347',
      'secondary-invert': '#924607',
    },
    fontSize: {
      H1: '40px',
      H2: '32px',
      H3: '24px',
      H1Mobile: '32px',
      H2Mobile: '24px',
      H3Mobile: '20px',
      navItem: '32px',
      navItemMobile: '40px',
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
    keyframes: {
      loaderAnimation: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.5)' },
        '100%': { transform: 'scale(1)' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    // Add the animation class
    animation: {
      loader: 'loaderAnimation 1s infinite ease-in-out',
      spin: 'spin 1.5s linear infinite',
    },
  },
  plugins: [],
};
export default config;
