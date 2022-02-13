import React from 'react'

import { useSelector } from 'react-redux'
import { UserState } from '../../models/user'
import { Spinner, Followers as FollowersComp } from '../../components'

interface UserStore {
	users: UserState
}

const Followers: React.FC = () => {
	const { followers, isAddContentLoading } = useSelector(
		(store: UserStore) => store?.users,
	)

	return isAddContentLoading ? (
		<Spinner />
	) : (
		<FollowersComp followers={followers} />
	)
}

export default Followers
