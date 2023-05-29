/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      gainsboro: 'var(--gainsboro)',
      text: 'var(--text)',
      footer: 'var(--footer)',
      background: 'var(--background)',
      comment: 'var(--comment)',
      hover: 'var(--hover)',
      'nav-hover': 'var(--nav-hover)',
      divide: 'var(--divide)',

      red: 'var(--red)',
      primary: 'var(--primary)',
      crayola: 'var(--crayola)',
      'philippine-gray': 'var(--philippine-gray)',
      'anti-flash-gray': 'var(--anti-flash-gray)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {},
  },
  plugins: [require('tailwindcss-radix')],
}
