import { svelte } from "@sveltejs/vite-plugin-svelte"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    build: {
        rolldownOptions: {
            input: ["src/tiny.css"],
            output: {
                assetFileNames: "[name].min.[ext]",
            },
        },
    },
})
