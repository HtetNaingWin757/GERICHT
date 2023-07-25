/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Cormorant : ['Cormorant Upright'],
        OpenSan : ['Open Sans']
      },
      colors : {
        primary : '#DCCA87',
        secondary : '#a5a5a5',
        btn : '#F5EFDB'
      }
    },
  },
  plugins: [],
}