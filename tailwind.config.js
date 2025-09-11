// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  darkMode: "class", // or "media"; we’ll force dark via a class
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#0B0E12",
          surface: "#12161C",
          text: "#E8ECF1",
          muted: "#A7B0BB",
          primary: "#4CC38A",
          accent: "#7C91FF",
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,.2)",
      },
      borderColor: {
        subtle: "rgba(255,255,255,0.10)",
      },
    },
  },
  plugins: [],
};
