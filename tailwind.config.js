/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "media",

  // ✅ In v4, keep non-token settings like `container` here if you use <Container />
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },

    // ❌ Don’t define tokens (colors/spacing/fonts/etc.) here in v4.
    // ❌ All of this moved to CSS `@theme` in globals.css.
    // extend: {
    //   fontFamily: {...},
    //   spacing: {...},
    //   colors: {...},
    //   boxShadow: {...},
    //   borderColor: {...},
    //   borderRadius: {...},
    // },
  },

  plugins: [],
};
