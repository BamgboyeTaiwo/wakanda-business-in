const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  color: {
    background: "#FFFFFF",
    buttonColor: "#00A85A",
  },
  theme: {
    screens: {
      sm: "320px",

      md: "567px",

      lg: "768px",

      xxlg: "1200px",
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 80px 15px rgba(0, 0, 0, 0.3)",
      },
    },

    fontFamily: {
      body: ["Raleway"],
    },
  },
  plugins: [],
};
