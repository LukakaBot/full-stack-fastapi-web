import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      AutoImport({
        imports: ["react", "react-router"],
        dts: "src/types/auto-import.d.ts",
        include: [/\.[tj]sx?$/, /\.md$/],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
