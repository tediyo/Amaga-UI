// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font
      },
      fontSize: {
        'custom-sm': '78.293px', // Custom font size
      },
      lineHeight: {
        'custom': '29.36px', // Custom line height
      },
      fontWeight: {
        'medium': 500, // Custom font weight
      }
    },
  },
  plugins: [],
}


