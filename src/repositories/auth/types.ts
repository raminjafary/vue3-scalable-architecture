export interface LoginPayload {
	phone: string
}

export interface IAuth {
	login(payload: LoginPayload): any
}
