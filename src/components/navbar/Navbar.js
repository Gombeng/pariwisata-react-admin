import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Flexbox } from '../Components';

const Navbar = () => {

	const navigate = useNavigate();

	const logOut = () => {
		let confirmBox = window.confirm('Keluar dari halaman admin?');
		if (confirmBox) {
			localStorage.clear();
			navigate('/login');
		}
	};

	return (
		<Box>
			<Navcontainer>
				<Flexbox>
					<h4>ADMIN MADINA</h4>
				</Flexbox>

				<div>
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="tour"
					>
						Beranda
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
						to="post"
					>
						Tambah Tour
					</NavLink>
					<Button onClick={logOut}>Keluar</Button>
				</div>
			</Navcontainer>
		</Box>
	);
};

export default Navbar;

// styled components
const Navcontainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 90%;
	margin: 0 auto;
	min-height: 10vh;
	color: #fff;

	img {
		width: 2rem;
		margin-right: 1rem;
	}

	.link {
		color: #b6b6b6;
		padding: 0.8rem 1rem;
		transition: 0.3s;

		&:hover {
			color: #fff;
		}

		&:not(:last-child) {
			margin-right: 1rem;
		}
	}

	.active {
		color: #fff;
		font-weight: 500;
	}

	.cta {
		font-weight: 600;
		border-radius: 0.3rem;
		padding: 0.8rem 1rem;
		color: #000000;
		background: #fff;
	}
`;

const Box = styled.div`
	background: #000;
	position: sticky;
	top: 0;
`;

const Button = styled.button`
    all: unset;
    padding: .6rem 1.3rem;
    cursor: pointer;
    color:  #000;
    background: #fff;
    border-radius: .3rem;
    transition: .3s;

    &:hover{
        opacity: .9;
    }
`
