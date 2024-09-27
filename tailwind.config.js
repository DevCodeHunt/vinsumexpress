/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E24A4A",
        secondary: "#E35062",
        danger: "#e74c3c",
        forground: "#F5F8FB",
        "indigo-color": "#6450E3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monotserrat: ["Montserrat", "monospace"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
