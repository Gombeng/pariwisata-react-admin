import axios from 'axios';
import React, { useEffect, useState, CSSProperties } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import styled from 'styled-components';
import { Container } from '../../components/Components';

const override: CSSProperties = {
	display: 'block',
	margin: '1rem auto',
};

const Tour = () => {
	let i = 1;
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	// get all tour data
	useEffect(() => {
		setLoading(true);
		axios
			.get('https://server-pariwisata-anisa.herokuapp.com/api/getAll')
			.then((res) => {
				if (!res.data) {
					setError('Gagal memuat data.');
				}

				if (res.data.length === 0) {
					setError('Database Kosong! Silahkan tambah data.');
				}

				setLoading(false);
				setData(res.data);
				console.log(res);
			})
			.catch((err) => console.log(err, 'it has an error'));
	}, [setLoading]);

	// delete user by id
	const handleDelete = async (id) => {
		if (window.confirm('Hapus data?')) {
			await axios
				.delete(`https://server-pariwisata-anisa.herokuapp.com/api/delete/${id}`)
				.then(() => {
					return axios.get('https://server-pariwisata-anisa.herokuapp.com/api/getAll');
				})
				.then((res) => {
					setData(res.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<Container>
			<div>
				<h2>Daftar Tempat Wisata di MADINA</h2>

				<hr />

				<Table>
					<thead>
						<tr>
							<th style={{ width: '30px' }}>No.</th>
							<th style={{ width: '200px' }}>Nama Tempat</th>
							<th>Deskripsi & Lokasi</th>
							<th>Gambar</th>
							<th style={{ width: '150px' }}>Aksi</th>
						</tr>
					</thead>
					<tbody>
						{loading && (
							<tr className="text-center">
								<td colspan="5">
									<HashLoader size={120} cssOverride={override} />
								</td>
							</tr>
						)}
						{error && (
							<tr className="text-center">
								<td colspan="5">
									<p>{error}</p>
								</td>
							</tr>
						)}
						{data.map((tour, index) => (
							<tr key={index}>
								<td>{i++}.</td>
								<td>{tour.title}</td>
								<td>
									<p>{tour.desc}</p>
									<a href={tour.address} target="_blank" rel="noreferrer">
										Lihat di Google Maps
									</a>
								</td>
								<td>
									<img
										style={{ width: '150px' }}
										src={`https://server-pariwisata-anisa.herokuapp.com/${tour.image}`}
										alt={tour.image}
									/>
								</td>
								<td>
									<button
										className="delete"
										onClick={(e) => handleDelete(tour._id)}
									>
										Hapus
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</Container>
	);
};

export default Tour;

const Table = styled.table`
	border-collapse: collapse;
	margin: 25px 0;
	font-size: 0.9em;
	width: 80vw;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

	thead tr {
		background-color: #009879;
		color: #ffffff;
		text-align: left;
	}

	tbody tr {
		border-bottom: thin solid #dddddd;

		&:nth-of-type(even) {
			background-color: #f3f3f3;
		}

		&:last-of-type {
			border-bottom: 2px solid #009879;
		}
	}

	th,
	td {
		padding: 12px 15px;
	}

	.width {
		width: 200px;
	}

	button {
		all: unset;
		padding: 0.8rem 1.3rem;
		padding: 1rem;
		margin: 0.5rem;
		cursor: pointer;
		border-radius: 0.3rem;
		text-align: center;
		color: #fff;
		background-color: #2ace2a;
		transition: 0.3s;
		width: calc(100% - 3rem);

		&.delete {
			background-color: #ce2a2a;
		}

		&:hover {
			opacity: 0.8;
		}
	}
`;
