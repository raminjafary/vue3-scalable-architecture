import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import * as dotenv from 'dotenv'

const env = process.env.NODE_ENV

const envPath = path.resolve(process.cwd(), `.env.${env}`)
const defaultEnvPath = path.resolve(process.cwd(), '.env.development')

dotenv.config({
	path: fs.existsSync(envPath) ? envPath : defaultEnvPath,
})

export default defineConfig({
	plugins: [vue(), eslintPlugin()],
	server: {
		host: true,
	},
	mode: env,
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
})
