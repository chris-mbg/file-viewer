module.exports = {
  content: [
    "./src/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}"
  ],
  theme: {
    fontFamily: {
      mono: ["Noto Sans Mono", "monospace"]
    },
    extend: {
      colors: {
        golden: "#e7bb41",
        onyx: "#393E41",
        light: "#D3D0CB"
      }
    }
  },
  plugins: []
}
