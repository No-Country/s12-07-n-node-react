/* import React from 'react' */
import axios from 'axios';
import { useState } from 'react';

export default function Signin({vis, setVis}) {
	const changeVis = () => {
		setVis(!vis);
	}
	const [userData, setUserData] = useState({
		mail: '',
		password: '',
	})
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevData) => ({
		...prevData,
		[name]: value,
		}));
	}

	const handleSubmint = async (e) => {
		e.preventDefault();
	    console.log(userData)
			try {
				const response = await axios.post('https://streamview.onrender.com/api/v1/auth/login', userData, {
				headers: {
					'Content-Type': 'application/json',
				},
				});
				console.log(response.data);
				localStorage.setItem("Token", response.data.user.token)
				window.location.reload();
			} catch (error) {
				console.error('Error al iniciar sesion:', error);
			}
	}
	

	return (
		<>
			{vis &&
				<div id='conteiner' className='fixed top-0 bg-black bg-opacity-40 flex h-full w-full items-center justify-center text-center text-white'>
				<form action='' className="w-3/5" onSubmit={handleSubmint}>
					<div className='bg-purple-800 rounded-md p-5 flex flex-col items-center relative'>
						<div className="h-32 w-32 m-2">
							
						</div>
						
						<button className="absolute top-3 right-3 h-7 w-7 bg-pink-600 hover:bg-pink-800 rounded-md"
                		onClick={changeVis}>x</button>

						<h1 className="font-black">INICIAR SESION</h1>

						<input
							className='m-2 h-10 w-56 rounded-md border-2 border-blue-400 p-2 text-black'
							name='mail'
							type='email'
							placeholder='E-Mail'
							value={userData.mail}
							onChange={handleInputChange}
						/>
						<input
							className='m-2 h-10 w-56 rounded-md border-2 border-blue-400 p-2 text-black'
							name='password'
							type='password'
							placeholder='Contraseña'
							value={userData.password}
							onChange={handleInputChange}
						/>

						<a href='' className='my-2 hover:underline font-black'>
							¿OLVIDASTE TU CONTRASEÑA?
						</a>

						<button
							type='submit'
							className='m-2 w-56 rounded-md border-b-2 border-b-purple-800 bg-pink-600 py-2 transition duration-200 hover:border-b-transparent hover:bg-pink-900'
						>
							Iniciar Sesion
						</button>
						<p>Inicia sesion con tus cuentas de redes sociales</p>

						<div className="flex justify-center">
							<a href='#' className="m-3">
								<svg
									xmlns='http://www.w3.org/2000/svg'
									x='0px'
									y='0px'
									width='30'
									height='30'
									viewBox='0 0 32 32'
								>
									<path d='M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z'></path>
								</svg>
							</a>

							<a href="#" className="m-3">
								<svg
									xmlns='http://www.w3.org/2000/svg'
									x='0px'
									y='0px'
									width='30'
									height='30'
									viewBox='0 0 30 30'
								>
									<path d='M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z'></path>
								</svg>
							</a>

							<a href="#" className="m-3">
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='30'
									height='30'
									viewBox='0 0 50 50'
								>
									<path d='M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z'></path>
								</svg>
							</a>
						</div>
					</div>
				</form>
			</div>}
		</>
	);
}
