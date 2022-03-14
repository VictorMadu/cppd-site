module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pri-100": "#EDECF5",
        "pri-200": "#DBD8EA",
        "pri-300": "#C9C4DF",
        "pri-400": "#B7B0D4",
        "pri-500": "#8D8FB1",
        "pri-600": "#636D8D",
        "pri-700": "#323747",
        "pri-800": "#191C24",
        "pri-900": "#0D0E12",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
