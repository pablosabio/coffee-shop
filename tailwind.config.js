/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffeeBrown: "#4E342E", // Color marrón
        coffeeCream: "#DFC4A6", // Color crema
        lightCream: "#F5F5DC", // Color crema claro
        lightGreen: "#C4C495", // Color verde claro
      },
    },
  },
  plugins: [],
}