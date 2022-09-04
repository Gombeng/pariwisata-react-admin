import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import { AddTour, Tour, Login, Mainapp, Notfound } from '../pages/Pages';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" element={<Login />} />

				<Route exact path="/" element={<Mainapp />}>
					<Route index element={<Tour />} />
					<Route exact path="tour" element={<Tour />} />
					<Route exact path="post" element={<AddTour />} />
					<Route exact path="*" element={<Notfound />} />
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
