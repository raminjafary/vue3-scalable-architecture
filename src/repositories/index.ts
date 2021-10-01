import type { AxiosInstance } from 'axios'
import type { IAuth } from './auth/types'
import auth from './auth'

function noop() {}

function lazyBind<T>(repoFactory: any, repoInterface: T, axios: AxiosInstance) {
	return {
		...Object.keys(repoInterface).reduce((acc, method: any) => {
			const resolvedMethod = async (...args: any[]) => {
				const repo: any = await repoFactory()
				return repo.default(axios)[method](...args)
			}
			return {
				...acc,
				[method]: resolvedMethod,
			}
		}, {}),
	}
}

export default function repositories(axios: AxiosInstance) {
	return {
		get auth() {
			return lazyBind<IAuth>(() => import('./auth'), { login: noop } /* or -> auth(axios) */, axios)
		},
	}
}
