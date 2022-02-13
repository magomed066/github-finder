import React from 'react'

import { useSelector } from 'react-redux'
import { UserState } from '../../models/user'
import { Spinner, Followings as FollowingsComp } from '../../components'

interface UserStore {
	users: UserState
}

const Followings: React.FC = () => {
	const { followings, isAddContentLoading } = useSelector(
		(store: UserStore) => store?.users,
	)

	return isAddContentLoading ? (
		<Spinner />
	) : (
		<FollowingsComp followings={followings} />
	)
}

export default Followings
