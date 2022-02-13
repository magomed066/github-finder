import React from 'react'
import { Spinner as SpinnerC } from 'react-bootstrap'

const Spinner: React.FC = () => {
	return (
		<div className="text-center mt-4">
			<SpinnerC animation="border" variant="light" className="mt-3" />
		</div>
	)
}

export default Spinner
