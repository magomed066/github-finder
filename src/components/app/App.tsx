import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Header } from '../'
import { Followers, Followings, Home, NotFound, Repos, User } from '../../pages'

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<User />}>
						<Route path="repositories" element={<Repos />} />
						<Route path="followers" element={<Followers />} />
						<Route path="followings" element={<Followings />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
