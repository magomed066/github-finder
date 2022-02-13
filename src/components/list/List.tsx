import React from 'react'
import ListItem from '../list-item/ListItem'

interface Props {
	users: any[]
}

const List: React.FC<Props> = ({ users = [] }) => {
	return (
		<div className="mt-4 rounded d-flex gap-2 flex-wrap ">
			{users.map((item) => (
				<ListItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default List
