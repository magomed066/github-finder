export interface User {
	avatar_url?: string
	login?: string
	bio?: string
	followers?: number
	following?: number
	type?: string
	location?: string
	url?: string
	public_repos?: number
	html_url?: string
}
export interface Repo {
	name: string
	id: number
	visibility: string
	html_url: string
}

export interface Follower {
	login: string
	id: string
	avatar_url: string
	html_url: string
}

export interface UserState {
	loading: boolean
	users: User[]
	user: User
	error: boolean
	followers: Follower[]
	followings: Follower[]
	repos: Repo[]
	isAddContentLoading: boolean
}
