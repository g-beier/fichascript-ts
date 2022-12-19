const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: defaultColors.black,
      white: defaultColors.white,
      gray: defaultColors.slate,
      sky: defaultColors.sky,
      amber: defaultColors.amber,
      red: defaultColors.red,
    },
    extend: {
      fontFamily: {
        sans: ["Maven Pro", ...defaultTheme.fontFamily.sans],
      },
      containers: {
        micro: "10rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
