/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title': ['Oswald']
    },
    extend: {
      boxShadow: {
        '1': '0px 0px 18px 2px rgba(255, 0, 255, 0.4)',
        '2': '0px 0px 22px 2px rgba(255, 255, 255, 0.3)',
      },
      colors: {
        'my-magenta': 'rgba(255, 0, 255, 0.5)',
      },
      scale: {
        '118': '1.18',
      }
    },
  },
  plugins: [],
}

