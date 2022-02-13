import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserState } from '../models/user'
import Users from '../services/users'

export const getUsers: any = createAsyncThunk(
	'users',
	async (login: string, thunkAPI) => {
		try {
			const data = await Users.getUser(login)

			return data
		} catch (err) {
			return
		}
	},
)
export const getUserByLogin: any = createAsyncThunk(
	'users/info',
	async (login: string, thunkAPI) => {
		try {
			const data = await Users.getUserByLogin(login)

			return data
		} catch (err) {
			return
		}
	},
)
export const getUserRepos: any = createAsyncThunk(
	'users/repos',
	async (login: string, thunkAPI) => {
		try {
			const data = await Users.getUserRepos(login)

			return data
		} catch (err) {
			return
		}
	},
)
export const getFollowers: any = createAsyncThunk(
	'users/followers',
	async (login: string, thunkAPI) => {
		try {
			const data = await Users.getFollewers(login)

			return data
		} catch (err) {
			return
		}
	},
)
export const getFollowings: any = createAsyncThunk(
	'users/followings',
	async (login: string, thunkAPI) => {
		try {
			const data = await Users.getFollowings(login)

			return data
		} catch (err) {
			return
		}
	},
)

const initialState: UserState = {
	loading: false,
	users: [],
	user: {},
	error: false,
	repos: [],
	followers: [],
	isAddContentLoading: false,
	followings: [],
}

const userSlise = createSlice({
	name: 'users',
	initialState,
	reducers: {
		clearUsers(state) {
			state.users = []
		},
	},
	extraReducers: {
		[getUsers.pending]: (state) => {
			state.loading = true
			state.error = true
		},
		[getUsers.fulfilled]: (state, action) => {
			state.loading = false
			state.users = action.payload
		},
		[getUsers.rejected]: (state) => {
			state.loading = false
			state.error = true
		},
		// User info
		[getUserByLogin.pending]: (state) => {
			state.loading = true
			state.error = true
		},
		[getUserByLogin.fulfilled]: (state, action) => {
			state.loading = false
			state.user = action.payload
		},
		[getUserByLogin.rejected]: (state) => {
			state.loading = false
			state.error = true
		},
		// User Followers
		[getFollowers.pending]: (state) => {
			state.isAddContentLoading = true
			state.error = true
		},
		[getFollowers.fulfilled]: (state, action) => {
			state.isAddContentLoading = false
			state.followers = action.payload
		},
		[getFollowers.rejected]: (state) => {
			state.isAddContentLoading = false
			state.error = true
		},
		// User Following
		[getFollowings.pending]: (state) => {
			state.isAddContentLoading = true
			state.error = true
		},
		[getFollowings.fulfilled]: (state, action) => {
			state.isAddContentLoading = false
			state.followings = action.payload
		},
		[getFollowings.rejected]: (state) => {
			state.isAddContentLoading = false
			state.error = true
		},
		// User Repos
		[getUserRepos.pending]: (state) => {
			state.isAddContentLoading = true
			state.error = true
		},
		[getUserRepos.fulfilled]: (state, action) => {
			state.isAddContentLoading = false
			state.repos = action.payload
		},
		[getUserRepos.rejected]: (state) => {
			state.isAddContentLoading = false
			state.error = true
		},
	},
})

export const { clearUsers } = userSlise.actions

export default userSlise.reducer
