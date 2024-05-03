/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : [ 'Inter', 'Avenir', 'Helvetica', 'Arial',],
      },
      
      colors: {
        'black': '#04152d',
        'black2': '#041226',
        'black3': '#020c1b',
        'black-lighter': '#1c4b91',
        'black-light': '#173d77',
        'pink': '#da2f68',
        'orange': '#f89e00',
        'gradient': 'linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)',
        'black-rgba': 'rgba(255, 255, 255, 0.1);',
        'bg-gradient': 'linear-gradient(180deg, rgba(4, 21, 45, 0) 0%,  #04152d 79.17%)'

      },
      keyframes : {
        mobilemenu :{
          '0%' : {
            transform: 'translateY(-130%)'
          },
          '100%' :{
            transform: 'translateY(0)'
          }
        },
       

    },
    animation: {
     'translatey' : 'mobilemenu 0.3s ease forwards  ',
     'transition': 'left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s',
    }

     
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}