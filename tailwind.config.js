/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Kumbh', 'sans-serif']
    },
    extend: {
      colors: {
        'Orange': 'hsl(26, 100%, 55%)',
        'PaleOrange': 'hsl(25, 100%, 94%)',
        'DarkBlue-900': 'hsl(220, 13%, 13%)',
        'DarkBlue-800': 'hsl(219, 9%, 45%)',
        'DarkBlue-700': 'hsl(220, 14%, 75%)',
        'DarkBlue-600': 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'hsl(0, 0%, 0%)'
      }
    },
  },
  plugins: [],
}
