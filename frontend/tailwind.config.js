/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "460px",
      sm:"612px",
      md: "784px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px"
    },
  },
  plugins: [],
};
