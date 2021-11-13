module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        700: "700px",
        "5p": "5%",
        "95p": "95%",
      },
      width: {
        350: "350px",
      },
      minWidth: {
        350: "350px",
        "4/5": "80%",
      },
      minHeight: {
        "1/2": "50%",
        "9/10": "90%",
      },
      maxWidth: {
        350: "350px",
        "1/2": "50%",
        "4/5": "80%",
      },
      maxHeight: {
        "1/2": "50%",
        "4/5": "80%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
