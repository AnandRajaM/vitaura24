/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neongreen: '#C1FF43',
        hotpink: '#F94AC9',
      },
      fontFamily: {

        fluxbox: ['fluxbox', 'space-mono'],  
      },
    backgroundImage: {
      'dot-pattern': 'radial-gradient(circle, white 1px, transparent 1px)',
    },
    backgroundSize: {
      'dot-pattern': '20px 20px',
    },
  },
  plugins: [],
},
}
