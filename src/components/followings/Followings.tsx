import React from 'react'
import { Follower } from '../../models/user'
import ListItem from '../list-item/ListItem'

interface Props {
	followings: Follower[]
}

const Followings: React.FC<Props> = ({ followings = [] }) => {
	return (
		<div className="d-flex flex-wrap gap-3">
			{followings.length ? (
				followings.map((item) => (
					<ListItem key={item.id} item={item} view={true} />
				))
			) : (
				<h3 className="text-center mt-3">No followings!</h3>
			)}
		</div>
	)
}

export default Followings
