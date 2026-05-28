/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#020813",
        lightBg: "#f4f7fa",
        accentBlue: "#0052ff",
      },
    },
  },
  plugins: [],
}