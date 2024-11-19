/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px 1px 6px -1px rgba(15, 15, 16, 0.12), 0px 2px 4px -1px rgba(15, 15, 16, 0.08)',
      },
    },
  },
  plugins: [require('flowbite/plugin'),
  function ({ addUtilities }) {
    addUtilities({
      '.hide-scrollbar': {
        /* For Webkit-based browsers (e.g. Chrome, Safari) */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        /* For Firefox */
        '&': {
          scrollbarWidth: 'none',
        },
        /* For IE, Edge */
        '-ms-overflow-style': 'none',
      },
    })
  }
  ],
}

