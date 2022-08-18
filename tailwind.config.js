module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f7fe7",
        primary2: "#1871c4",
        secondary: "#e71111",
        darkSecondary: "#c42020",
        darkColor: "#1a1a1a",
        dark: "#274866"
      },
      width: {
        92: "23rem",
      },
      height: {
        92: "22rem",
      },
    },
  },
  plugins: [],
};
