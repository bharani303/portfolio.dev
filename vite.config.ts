import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import tailwindcss from 'tailwindcss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: { '@': resolve(__dirname, 'src') },
    },
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    build: {
        target: 'esnext',
        minify: 'esbuild',
        cssMinify: true,
        modulePreload: { polyfill: false },
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    server: { port: 3000, open: false },
})

