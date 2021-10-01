import type { LoginPayload } from './types'
import type { AxiosInstance } from 'axios'
import { LOGIN } from './endpoint'

export default function auth(axios: AxiosInstance) {
	return {
		login(payload: LoginPayload) {
			return axios.post(LOGIN, payload)
		},
	}
}
