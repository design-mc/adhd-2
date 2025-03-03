/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        accent: "#F59E0B",
        danger: "#EF4444",
        info: "#3B82F6",
        darkBg: "#121212",
        darkCard: "#1E1E1E",
        darkBorder: "#333333",
        darkText: "#E0E0E0",
      },
    },
  },
  plugins: [],
}
