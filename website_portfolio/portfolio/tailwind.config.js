/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      zIndex: {
        '1': '1',
        '100': '100',
      },
      spacing: {
        '5rem': '5rem',
        '6rem': '6rem',
        '10rem': '10rem',
        '14rem': '14rem',
        '25rem': '25rem',
        '20rem': '20rem',
        '40rem': '40rem',
        '100px': '100px',
        '500px': '500px',
      },
      colors: { 
        'text': '#180202',
        'background': '#232741',
        'altbackground': '#010b19',
        'primary': '#ff6d4d',
        'secondary': '#e6e6e5',
        'accent': '#d12600',
       },
      fontFamily: {
        heading: ['"Rubik Doodle Shadow"', 'Overpass Mono'],
        body: ['"Rubik Doodle Shadow"', 'Overpass Mono'],
        normal: ['Overpass Mono'],
      },
      fontSize: {
        sm: '0.618rem',
        base: '1rem',
        xl: '1.618rem',
        '2xl': '2.618rem',
        '3xl': '4.236rem',
        '4xl': '6.854rem',
        '5xl': '11.090rem',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      // media queries:  https://tailwindcss.com/docs/screens
    },
  },
  plugins: [],
};