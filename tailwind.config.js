/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        elevaiton: "0px 4px 20px 0px rgba(112, 144, 176, 0.15);",
      },
      textColor: {
        skyBlue: "#2492F4",
        subBlue: "#237BC9",
        lightBlue: "#135C9D",
        primaryBlue03: "#002C53",
      },
      fontSize: {
        h1: "40px",
        h2: "36px",
        h3: "32px",
        h4: "28px",
        h5: "24px",
        h6: "20px",
        b1: "18px",
        b2: "16px",
        b3: "14px",
        caption: "12px",
      },
      lineHeight: {
        h1: "60px",
        h2: "54px",
        h3: "48px",
        h4: "40px",
        h5: "36px",
        h6: "28px",
        b1: "26px",
        b2: "24px",
        b3: "20px",
        caption: "18px",
      },
      fontWeight: {
        b: "700",
        m: "500",
        r: "300",
      },
    },
    screens: {
      ow: "0px",
      sm: "320px",
      // sm: "640px",
      // sm: "768px",

      // md: "768px",
      md: "1024px",

      // lg: "1024px",
      lg: "1280px",

      // xl: "1280px",
      xl: "1536px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
