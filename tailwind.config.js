/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  daisyui:{
    themes:["sunset"],
  },
  plugins: [require("daisyui")],
}

