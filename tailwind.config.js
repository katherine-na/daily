/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        menta: '#20DDEC',
        purple: '#9F97CD',
      },
    },
  },
  plugins: [],
}