import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import App from '@/App.vue'
import bootstrap from '@/bootstrap'
import context from '@/context'
import globalStore from '@/store'
import registerGlobalComponents from '@/component'

import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'

const app = createApp(App)

registerGlobalComponents(app, context)

async function init() {
	await bootstrap(context)
	const routes = context.Router.routes
	const modules = context.Store

	const store = createStore({
		strict: true,
		...globalStore,
	})

	modules.registerModule(store)

	const router = createRouter({
		history: createWebHistory(),
		routes,
	})

	app.use(router).use(store).mount('#app')
}

init()
