/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-85': 'calc(100vw * 0.85)',
      },
    },
  },
  plugins: [],
}

