import React from 'react'
import { useSelector } from 'react-redux'
import { UserState } from '../../models/user'
import { Repos as ReposComp, Spinner } from '../../components'

interface UserStore {
	users: UserState
}

const Repos: React.FC = () => {
	const { repos, isAddContentLoading } = useSelector(
		(store: UserStore) => store?.users,
	)

	return isAddContentLoading ? <Spinner /> : <ReposComp repos={repos} />
}

export default Repos
