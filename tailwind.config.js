/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      transparent: 'transparent',

      gainsboro: 'var(--gainsboro)',
      text: 'var(--text)',
      footer: 'var(--footer)',
      background: 'var(--background)',
      comment: 'var(--comment)',
      hover: 'var(--hover)',
      'nav-hover': 'var(--nav-hover)',
      divide: 'var(--divide)',
      popover: 'var(--popover)',
      'popover-divide': 'var(--popover-divide)',
      'nav-menu-item': 'var(--nav-menu-item)',
      link: 'var(--link)',

      'btn-primary': 'var(--btn-primary)',
      'btn-primary-hover': 'var(--btn-primary-hover)',
      'btn-secondary': 'var(--btn-secondary)',
      'btn-secondary-hover': 'var(--btn-secondary-hover)',
      'btn-text-primary': 'var(--btn-text-primary)',
      'btn-text-primary-hover': 'var(--btn-text-primary-hover)',
      'btn-text-secondary': 'var(--btn-text-secondary)',
      'btn-text-secondary-hover': 'var(--btn-text-secondary-hover)',

      red: 'var(--red)',
      primary: 'var(--primary)',
      crayola: 'var(--crayola)',
      'philippine-gray': 'var(--philippine-gray)',
      'anti-flash-gray': 'var(--anti-flash-gray)',
    },
    boxShadow: {
      55: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1160px',
      xl: '1264px',
    },
    container: {},
  },
  plugins: [require('tailwindcss-radix')],
}
