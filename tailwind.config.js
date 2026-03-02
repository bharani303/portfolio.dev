/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'green-terminal': '#0f0',
                'cyan-terminal': '#0bc',
                'pink-terminal': '#ff0096',
                'gray-terminal': '#888',
            },
            fontFamily: {
                'terminal': ['courier', 'monospace'],
            }
        }
    },
    safelist: [
        'text-green-terminal',
        'text-cyan-terminal',
        'text-pink-terminal',
        'text-gray-terminal',
    ],
    plugins: [],
}
