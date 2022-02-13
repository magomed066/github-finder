import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

interface Props {
	item: { avatar_url: string; login: string; html_url: string }
	view?: boolean
}

const ListItem: React.FC<Props> = ({ item = {}, view = false }) => {
	return (
		<Card
			style={{ width: '250px' }}
			bg="dark"
			className="shadow d-flex flex-row align-items-center p-3"
		>
			<img
				src={item.avatar_url}
				alt="user_logo"
				style={{
					width: '60px',
					height: '60px',
					borderRadius: '50%',
					objectFit: 'cover',
				}}
			/>
			<div className="d-flex flex-column ms-4">
				<p
					style={{
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						width: '120px',
					}}
					className="mb-1 h5"
				>
					{item.login}
				</p>
				{!view ? (
					<NavLink to={`${item.login}`} className="text-secondary">
						View profile
					</NavLink>
				) : (
					<a href={item?.html_url} target="_blank" className="text-secondary">
						View profile
					</a>
				)}
			</div>
		</Card>
	)
}

export default ListItem
