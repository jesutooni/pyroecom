module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: "#FDC901",
        blueDark: "#0E1229",
        cream: "#F2F2F2",
        pale: {
          green: "#2F4F4F",
        },
        gray: {
          dark: "#343A40",
          light: "#6A6975",
          lighter: "#FFFFFF80",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
