module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#10E1EE",
        secondary: "#307F84",
        tertiary: "#297da0"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gotu: ["Gotu","serif"],
        montserrat:["Montserrat","sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1200px",
      lg: "1300px",
      xlg: "1490px",
      xl: "1700px",
    },
  },
  plugins: [],
};