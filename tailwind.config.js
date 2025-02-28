/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04223C',   //Azul oscuro
        secondary: '#04223C', // Azul claro
        terciario: '#1CD2C5',//Celeste Marino
        cuaternario: '#000000', //Negro
        quintuple: '#FFFFFF',// Blanco
      },
    },
  },
  plugins: [],
};
