import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<Container>
			<Row className="text-light mt-5">
				<Col xs={12} sm={12} md={12} className="text-center">
					<h2 className="mb-5">Page Not Found - 404</h2>
					<Button
						onClick={() => navigate(-1)}
						className="d-flex align-items-center m-auto"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-box-arrow-left me-3"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
							/>
							<path
								fillRule="evenodd"
								d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
							/>
						</svg>
						Back to home
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default NotFound
