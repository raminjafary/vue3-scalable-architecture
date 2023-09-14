import type { AxiosInstance } from 'axios'

function noop() {}

function lazyBind(repoFactory: any, repoInterface: any, axios: AxiosInstance) {
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
			return lazyBind(() => import('./auth'), { login: noop } /* or -> auth(axios) */, axios)
		},
	}
}
