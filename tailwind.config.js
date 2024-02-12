/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: { 
        'Inter' : ['Inter' , 'sans-serif'],
        'Anton' : ['Anton' , 'sans-serif']
      },
      boxShadow : {
        'icon-shadow' :  '0px 0px 20px 0px white'
      }
    },
  },
  plugins: [],
}