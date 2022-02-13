import React, { useEffect } from 'react'
import {
	Badge,
	Button,
	ButtonGroup,
	Col,
	Container,
	Row,
} from 'react-bootstrap'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { Spinner } from '../../components'
import { UserState } from '../../models/user'
import { useDispatch, useSelector } from 'react-redux'
import {
	getUserByLogin,
	getUserRepos,
	getFollowers,
	getFollowings,
} from '../../store/usersSlice'

interface UserStore {
	users: UserState
}

const User: React.FC = () => {
	const { id } = useParams<{ id?: string }>()
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { user, loading } = useSelector((store: UserStore) => store?.users)

	useEffect(() => {
		dispatch(getUserByLogin(id))
	}, [])

	const getRepos = () => {
		dispatch(getUserRepos(id))
	}
	const getUserFollowers = () => {
		dispatch(getFollowers(id))
	}
	const getUserFollowings = () => {
		dispatch(getFollowings(id))
	}

	return (
		<Container className="pt-5">
			<Button
				onClick={() => navigate('/', { replace: true })}
				variant="secondary"
			>
				Back to search
			</Button>

			{loading ? (
				<div className="text-center">
					<Spinner />
				</div>
			) : (
				<Row className="mt-5 text-light ">
					<Col xs={12} sm={12} md={3}>
						<img
							src={user?.avatar_url}
							alt="avatar"
							style={{ width: '300px' }}
						/>
						<div>
							<p className="h5 mt-4 mb-3">Bio:</p>
							<p>{user?.bio}</p>
							<p className="d-flex align-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-people-fill me-2"
									viewBox="0 0 16 16"
								>
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
									<path
										fillRule="evenodd"
										d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
									/>
									<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
								</svg>
								Followers: {user?.followers} | Following: {user?.following}
							</p>
							<p className="d-flex align-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-geo-alt me-2"
									viewBox="0 0 16 16"
								>
									<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
									<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
								</svg>
								{user?.location || 'Not set'}
							</p>
							<p className="mt-2"> Public repositories: {user?.public_repos}</p>
						</div>
					</Col>
					<Col xs={12} sm={12} md={9}>
						<Badge bg="info" className="mb-3">
							{user?.type}
						</Badge>
						<h4>{user?.login}</h4>

						<a
							href={user?.html_url}
							className="btn btn-primary mt-3"
							target="_blank"
						>
							View profile
						</a>

						<hr />

						<ButtonGroup aria-label="Basic example" className="mt-3 mb-4">
							<Link
								to={`/${id}/repositories`}
								className="btn btn-secondary"
								onClick={() => getRepos()}
							>
								Repositories
							</Link>
							<Link
								to={`/${id}/followers`}
								className="btn btn-secondary"
								onClick={() => getUserFollowers()}
							>
								Followers
							</Link>
							<Link
								to={`/${id}/followings`}
								className="btn btn-secondary"
								onClick={() => getUserFollowings()}
							>
								Followings
							</Link>
						</ButtonGroup>

						<Outlet />
					</Col>
				</Row>
			)}
		</Container>
	)
}

export default User
