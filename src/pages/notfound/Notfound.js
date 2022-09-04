import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Components';

const Notfound = () => {
	return (
		<Container center>
			<div>
				<h1 className="mb-1">404 Page not found</h1>
				<Link style={cta} to="/">
					Kembali
				</Link>
			</div>
		</Container>
	);
};

export default Notfound;

const cta = {
	fontWeight: '600',
	borderRadius: '0.3rem',
	padding: '0.8rem 1rem',
	color: '#fff',
	background: '#000000',
	margin: '0 1rem',
	width: 'fit-content',
	display: 'block',
};
