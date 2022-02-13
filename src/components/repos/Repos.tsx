import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import { Repo } from '../../models/user'

interface Props {
	repos: Repo[]
}

const Repos: React.FC<Props> = ({ repos }) => {
	return (
		<div className="d-flex gap-3 flex-wrap">
			{repos.length ? (
				repos.map((item) => (
					<Card key={item?.id} style={{ width: '18rem' }} bg="dark">
						<Card.Body>
							<Card.Title>{item?.name}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
							<Card.Text>
								<Badge bg="info" className="">
									{item?.visibility}
								</Badge>
							</Card.Text>
							<Card.Link href={item?.html_url} target="_blank">
								View on GitHub
							</Card.Link>
						</Card.Body>
					</Card>
				))
			) : (
				<h3 className="text-center mt-3">No repos!</h3>
			)}
		</div>
	)
}

export default Repos
