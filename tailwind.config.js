/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        '1fr': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}

