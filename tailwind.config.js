module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      colors: {
        'primary': '#3583a6',
        'primary-80': '#255c74',
        'primary-70': '#2a6985',
        'primary-60': '#307695',
        'primary-50': '#498faf',
        'primary-40': '#5d9cb8',
        'primary-30': '#72a8c1',

      },
      boxShadow: {
        linebreak: '0 10px 10px -10px rgba(96, 90, 80, 1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
  purge: ['./src/**/*.{html,js,md,njk,svg}'],
}
