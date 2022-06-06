module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      maingray: "#40403E",
      mainorange: "#FF7525",
      detailgray: "#999999",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
