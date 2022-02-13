import React from 'react'
import { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Users from '../../services/users'
import { getUsers } from '../../store/usersSlice'

const Search: React.FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const dispatch = useDispatch<React.Dispatch<any>>()

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()

		if (!searchValue.length) {
			alert('Fill up the field!')
			return
		}

		dispatch(getUsers(searchValue))

		setSearchValue('')
	}

	return (
		<Form className="d-flex" onSubmit={submitHandler}>
			<InputGroup className="mb-3">
				<FormControl
					placeholder="Input username"
					aria-label="Input username"
					aria-describedby="basic-addon2"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<Button variant="primary" id="button-addon2" type="submit">
					Button
				</Button>
			</InputGroup>
		</Form>
	)
}

export default Search
