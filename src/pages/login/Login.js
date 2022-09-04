import React, { useState, useEffect, CSSProperties } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bgImage from './airterjun.png'
import HashLoader from 'react-spinners/HashLoader';

const override: CSSProperties = {
	margin: '1rem auto',
};

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const userInfo = localStorage.getItem('adminPariwisata');

		if (userInfo) {
			navigate('/tour');
		}
	}, [navigate]);

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const config = {
				headers: {
					'Content-type': 'application/json',
				},
			};

			setLoading(true);

			const { data } = await axios.post(
				'https://server-pariwisata-anisa.herokuapp.com/api/user/login',
				{
					userName,
					password,
				},
				config
			);

			console.log(data);
			localStorage.setItem('adminPariwisata', JSON.stringify(data));
			setLoading(false);
			navigate('/');
		} catch (error) {
			setLoading(false);
			console.log(error.response);
			setError(error.response.data.message);
		}
	};

	return (
		<Container>
			<form onSubmit={submitHandler}>
				<h2>Silahkan Masuk</h2>

				{error && <p style={{ color: 'red', fontWeight: 'bold'}}>{error}</p>}
				<HashLoader size={32} cssOverride={override} loading={loading} />

				<Input
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					label="Email"
					type="text"
					placeholder="user@gmail.com"
				/>

                <br />

				<Input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="Kata Sandi"
					type="password"
					placeholder="********"
				/>

                <br />

				<Button type="submit">Masuk</Button>
			</form>
		</Container>
	);
};

export default Login;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: bottom;

    form{
        background-color: #fff;
        padding: 1rem;
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        border-radius: .3rem;
    }
`

const Input = styled.input`
    all: unset;
    width: 300px;
    padding: .8rem 1rem;
    border: 1px solid black;
    border-radius: .3rem;
    margin-bottom: 1rem;
`

const Button = styled.button`
    all: unset;
    padding: .8rem 1.3rem;
    cursor: pointer;
    color: #fff;
    background: #000;
    border-radius: .3rem;
    transition: .3s;

    &:hover{
        opacity: .9;
    }
`