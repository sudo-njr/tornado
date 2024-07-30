import { commonjs } from "@hyrious/esbuild-plugin-commonjs";
import { build } from "esbuild";

await build({
  entryPoints: ["src/index.ts"],
  format: "esm",
  platform: "node",
  bundle: true,
  minify: true,
  plugins: [commonjs()],
  outfile: "dist/index.mjs",
});
