import axios from 'axios'

const axiosInstance = axios.create({
	//TODO: Read from env!
	baseURL: 'http://localhost:3000/api/',
})

export default axiosInstance
