/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "784px",
      md: "890px",
      lg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
