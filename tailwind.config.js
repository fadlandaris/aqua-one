module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        body: ["'Manrope'", "sans-serif"],    
      },
      colors: {
        primary: '#4c8fb6',
        text: '#7c8698',
        lightBlack: "#1e1e1e",
        lightgray: '#f4f7fa',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
