function setToken(req: any) {
	req.headers['Authorization'] = `token ${process.env.REACT_APP_TOKEN}`

	return req
}

export default function (axios: any) {
	axios.interceptors.request.use(setToken)
}
