const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,vue}"],
  theme: {
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
