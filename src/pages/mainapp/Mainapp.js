import React, { useEffect } from 'react'
import {  Outlet, useNavigate} from 'react-router-dom';
import { Navbar } from '../../components/Components';

const Mainapp = () => {

    
	const navigate = useNavigate();

	useEffect(() => {
		const userInfo = localStorage.getItem('adminPariwisata');

		if (!userInfo) {
			navigate('/login');
		}
	}, [navigate]);

  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Mainapp