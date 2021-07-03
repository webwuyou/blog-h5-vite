import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import styleImport from 'vite-plugin-style-import';
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      },
    ],
  }), Markdown()],
  resolve: {
    alias: {
      "components": path.resolve(__dirname, "src/components"),
      "assets": path.resolve(__dirname, "src/assets"),
      "views": path.resolve(__dirname, "src/views"),
      "utils": path.resolve(__dirname, "src/utils")
    }
  }
})
