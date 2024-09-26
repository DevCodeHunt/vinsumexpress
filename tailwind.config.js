/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ed3237",
        secondary: "#f1c40f",
        danger: "#e74c3c",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monotserrat: ["Montserrat", "monospace"],
      },
    },
  },
  plugins: [nextui()],
};
