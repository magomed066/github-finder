import React from 'react'
import { Follower } from '../../models/user'
import ListItem from '../list-item/ListItem'

interface Props {
	followers: Follower[]
}

const Followers: React.FC<Props> = ({ followers = [] }) => {
	return (
		<div className="d-flex flex-wrap gap-3">
			{followers.length ? (
				followers.map((item) => (
					<ListItem key={item.id} item={item} view={true} />
				))
			) : (
				<h3 className="text-center mt-3">No followers!</h3>
			)}
		</div>
	)
}

export default Followers
