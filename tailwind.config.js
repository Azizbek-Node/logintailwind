import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        rasm: "url('./src/assets/Bg.png')",
      },
    },
    colors: {
      ...colors,
      primary: "crimson",
      lorem: "#0f0",
    },
    fontFamily: {
      edu: ["Edu"],
      dancing: ["Dancing", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1040px",
        "2xl": "1180px",
      },
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [],
};
