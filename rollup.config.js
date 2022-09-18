import { terser } from "rollup-plugin-terser";

export default {
  input: "src/assets/js/main.js",
  output: [
    {
      file: "src/assets/build/js/main.js",
      format: "iife",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
};
