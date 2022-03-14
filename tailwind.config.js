const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: colors.violet,
        // "pri-100": defaultTheme.colors("violet-100"),
        // "pri-200": defaultTheme.colors("violet-200"),
        // "pri-300": defaultTheme.colors("violet-300"),
        // "pri-400": defaultTheme.colors("violet-400"),
        // "pri-500": defaultTheme.colors("violet-500"),
        // "pri-600": defaultTheme.colors("violet-600"),
        // "pri-700": defaultTheme.colors("violet-700"),
        // "pri-800": defaultTheme.colors("violet-800"),
        // "pri-900": defaultTheme.colors("violet-900"),
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
