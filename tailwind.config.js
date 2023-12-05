/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#FFFFFF',
        'bg1': '#292F36',
        'bg2': '#1A1E23',
        'brand1': '#12F7D6',
        'brand2': '#98FAEC',
        'grey': '#43454D'
      },
      fontFamily: {
        'IBM': ['IBM Plex Mono']
      },
      boxShadow: {
        't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        't-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
        't-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

