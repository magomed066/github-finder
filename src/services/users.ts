import { axios } from '../plugins'

class Users {
	async getUser(name: string) {
		try {
			const { data } = await axios({
				url: `search/users?q=${name}`,
				method: 'GET',
			})

			return data.items
		} catch (err) {
			return Promise.reject(err)
		}
	}

	async getUserByLogin(login: string | undefined) {
		if (typeof login === undefined) {
			return Promise.reject('login is undefined. Gotta be a string!')
		}

		try {
			const { data } = await axios({
				url: `users/${login}`,
				method: 'GET',
			})

			return data
		} catch (err) {
			return Promise.reject(err)
		}
	}

	async getUserRepos(login: string | undefined) {
		if (typeof login === undefined) {
			return Promise.reject('login is undefined. Gotta be a string!')
		}

		try {
			const { data } = await axios({
				url: `users/${login}/repos`,
				method: 'GET',
			})

			return data
		} catch (err) {
			return Promise.reject(err)
		}
	}

	async getFollowings(login: string | undefined) {
		if (typeof login === undefined) {
			return Promise.reject('login is undefined. Gotta be a string!')
		}

		try {
			const { data } = await axios({
				url: `users/${login}/following`,
				method: 'GET',
			})

			return data
		} catch (err) {
			return Promise.reject(err)
		}
	}
	async getFollewers(login: string | undefined) {
		if (typeof login === undefined) {
			return Promise.reject('login is undefined. Gotta be a string!')
		}

		try {
			const { data } = await axios({
				url: `users/${login}/followers`,
				method: 'GET',
			})

			return data
		} catch (err) {
			return Promise.reject(err)
		}
	}
}

export default new Users()
