/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Blue': '#011C40',
      'White': '#FAFAFA',
      'Green': '#038C7F',
      'DarkGreen': '#025951',
      'Black': '#000'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight:{
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      black: '900',
    },
    extend: {
      screens: {
        'mobile': '360px',
        'tablet': '768px',
        'laptop': '1366px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

