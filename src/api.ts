import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
	baseURL: import.meta.env?.VITE_BASE_URL as string,
})

function handleRequest(config: AxiosRequestConfig) {
	// set auth header, etc.
	return config
}

function handleResponse(response: AxiosResponse) {
	return response.data
}

axiosInstance.interceptors.request.use(handleRequest)

axiosInstance.interceptors.response.use(handleResponse, (error) => {
	// handle error globally!
	return error
})

export default axiosInstance
