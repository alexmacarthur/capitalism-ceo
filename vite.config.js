import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    outDir: "public",
  },
  publicDir: false,
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/favicon.ico",
          dest: "",
        },
        {
          src: "src/og.png",
          dest: "",
        },
      ],
    }),
  ],
});
