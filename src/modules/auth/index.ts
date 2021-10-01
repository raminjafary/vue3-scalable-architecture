import type { IContext } from '@/context'
import store from './store'

export default function (ctx: IContext) {
	ctx.Store.registerStore('auth', store)

	ctx.Router.registerRoutes([
		{
			name: 'auth',
			path: '/auth',
			component: () => import('./pages/index.vue'),
		},
	])
}
