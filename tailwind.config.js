/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      transparent: 'transparent',
      gainsboro: 'var(--gainsboro)',
      'chinese-silver': 'var(--chinese-silver)',
      'bright-gray': 'var(--bright-gray)',
      lotion: 'var(--lotion)',
      nickel: 'var(--nickel)',
      'metallic-blue': 'var(--metallic-blue)',
      'very-light-azure': 'var(--very-light-azure)',

      base: 'var(--base)',
      note: 'var(--note)',
      'base-reverse': 'var(--base-reverse)',
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
      'btn-link': 'var(--btn-link)',
      'btn-link-hover': 'var(--btn-link-hover)',
      'btn-ghost': 'var(--btn-ghost)',
      'btn-ghost-hover': 'var(--btn-ghost-hover)',

      'search-input': 'var(--search-input)',

      red: 'var(--red)',
      primary: 'var(--primary)',
      crayola: 'var(--crayola)',
      'philippine-gray': 'var(--philippine-gray)',
      'anti-flash-gray': 'var(--anti-flash-gray)',

      gradient: 'var(--gradient)',
    },
    backgroundOpacity: ['active'],
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
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('mac', '.mac &')
      addVariant('windows', '.windows &')
      addVariant('ios', '.ios &')
    }),
    require('tailwindcss-radix'),
  ],
}
