// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  base: '/Gerenciador_de_tarefas/', // nome EXATO do repositório no GitHub
  plugins: [
    react(),
    ghPages()
  ],
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
})
