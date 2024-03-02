/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aggie-maroon': '#500000',
        'off-white': '#F8F9FA',
      },
    },
  },
  plugins: [],
}

