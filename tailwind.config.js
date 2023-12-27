/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        content: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: "#e84118",
        headign: "#1e272e",
        content: "#485460",
      },
  
    },
  },
  plugins: [],
};
