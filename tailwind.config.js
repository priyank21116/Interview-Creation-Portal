/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg: '976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        brightRed: 'hsl(12,88%,59%)',
        darkBlue:'hsl(228,39%,23%)',
        PaleRed:'hsl(13,100%,96%)',
        lightgrey:'hsl(0,0%,98%)',
      }
    },
  },
  plugins: [],
}
