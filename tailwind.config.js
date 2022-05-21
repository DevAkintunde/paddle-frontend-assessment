module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        "color-def": "#f8f4f5", //Default color: whitish
        "color-pri": "#140031", //Primary color: purplish
        "color-sec": "#271ac1", //Secondary color: blue
        "color-ter": "#ed72fa", //Tertiary color: shade of primary
        "color-bla": "#000", //Black
      },
    },
  },
  plugins: [],
};
