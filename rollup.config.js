import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
      format: "cjs",
      file: "dist/index.js"
  },
  plugins: [terser()]
};