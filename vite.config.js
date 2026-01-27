import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'ebook-01': resolve(__dirname, 'projects/ebook-01/index.html'),
                'deck-01': resolve(__dirname, 'projects/deck-01/index.html')
            }
        }
    },
    server: {
        open: true
    }
})
