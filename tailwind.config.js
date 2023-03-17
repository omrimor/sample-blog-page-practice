/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roobert)", "sans-serif"],
        serif: ["var(--font-reckless)", "serif"],
      },
      colors: {
        brandPrimary: {
          200: "#8578e6",
          300: "#665DAC",
        },
        brandPanelBackground: "#F8F4F0",
      },
    },
  },
  plugins: [],
};
