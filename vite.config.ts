import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue(), eslintPlugin()],
	server: {
		host: true,
	},
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
})
