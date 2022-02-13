import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { UserState } from '../../models/user'
// Components
import { List, Search, Spinner } from '../../components'
import { clearUsers } from '../../store/usersSlice'

interface UserStore {
	users: UserState
}

const Home: React.FC = () => {
	const { users, loading } = useSelector((store: UserStore) => store?.users)
	const dispatch = useDispatch()

	return (
		<Container className="pt-4 text-light">
			<Row>
				<Col xs={12} sm={12} md={6} className="d-flex align-items-center">
					<Search />
					{users?.length ? (
						<Button
							variant="secondary"
							className="mb-auto ms-4"
							onClick={() => dispatch(clearUsers())}
						>
							Clear
						</Button>
					) : null}
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={12} md={12}>
					{loading ? (
						<Spinner />
					) : !users?.length ? (
						<h2 className="text-center mt-5">There are no users!</h2>
					) : (
						<List users={users} />
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default Home
