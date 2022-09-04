import axios from 'axios';
import React, { useState, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import styled from 'styled-components';
import { Container } from '../../components/Components';

const override: CSSProperties = {
	margin: '1rem auto',
};

const AddTour = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [address, setAddress] = useState('');
	const [image, setImage] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('image', image);

		try {
			const config = {
				headers: {
					'Content-type': 'multipart/form-data',
				},
			};

			setLoading(true);

			const { data } = await axios.post(
				'https://server-pariwisata-anisa.herokuapp.com/api/post',
				{
					title,
					desc,
					image,
					address,
				},
				config
			);

			if (!data) {
				setError('Gagal memuat data');
			}

			setLoading(false);
			alert('Data berhasil di tambahkan');

			setTimeout(() => {
				navigate('/tour');
			}, 1000);
		} catch (error) {
			setLoading(false);
			console.log(error.response);
		}
	};

	return (
		<Container className="App" center style={{margin: '1rem auto'}}>
			<div>
				<HashLoader size={120} cssOverride={override} loading={loading} />
				{error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

				<Form onSubmit={handleSubmit} encType="multipart/form-data">
					<h4 className="mb-half">Gambar tempat wisata</h4>
					<input
						className="mb-1"
						type="file"
						accept=".png, .jpg, .jpeg"
						name="image"
						onChange={(e) => setImage(e.target.files[0])}
						required
					/>

					<h4 className="mb-half">Nama tempat wisata</h4>
					<input
						className="mb-1"
						type="text"
						value={title}
						onChange={(e) => {
							// additional function is to make first letter capital. e.g: foo -> Foo
							setTitle(
								e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
							);
						}}
						placeholder='Nama...'
						required
					/>

					<h4 className="mb-half">Lokasi tempat wisata</h4>
					<input
						className="mb-1"
						type="text"
						value={address}
						onChange={(e) => {
							// additional function is to make first letter capital. e.g: foo -> Foo
							setAddress(e.target.value);
						}}
						placeholder='Link Google maps...'
						required
					/>

					<h4 className="mb-half">Deskripsi tempat wisata</h4>
					<textarea
						className="mb-1"
						rows='5'
						value={desc}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
						placeholder='Deskripsi...'
						required
					></textarea>

					<button type="submit">Upload</button>
				</Form>
			</div>
		</Container>
	);
};

export default AddTour;

const Form = styled.form`
	width: 900px;
	max-width: 900px;
	display: flex;
	flex-direction: column;
	text-align: left;

	input,
	textarea {
		all: unset;
		border: 1px solid black;
		padding: 0.8rem;
		border-radius: 0.3rem;
	}

	button {
		all: unset;
		cursor: pointer;
		padding: 0.8rem 1.8rem;
		background: #000;
		color: #fff;
		width: fit-content;
		border-radius: 0.3rem;
		margin-top: 1rem;
	}

	.text-capitalize {
		text-transform: capitalize;
	}
`;
