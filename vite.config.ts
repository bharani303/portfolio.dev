import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'

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
        minify: 'terser',
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
