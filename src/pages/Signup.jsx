/* import React from 'react' */
import { useEffect, useState } from "react";
import { validationUser, validationField } from '../services/validation';
import axios  from 'axios';



export default function Signup({ vis, setVis }) {
	const changeVis = () => {
		setVis(!vis);
	}
	const [userData, setUserData] = useState({
		mail: '',
		password: '',
		name: '',
		surname: '',
		phone: '',
	})
	const [alerts, setAlerts] = useState({
		eName: false,
		eSurname: false,
		ePassword: false,
		eAnpassword: false,
		eConPassword: false,
		ePhone: false,
	})
	const [alert, setAlert] = useState(false)
	const [confirmationPassword, setConfirmationPassword] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevData) => ({
		...prevData,
		[name]: value,
		}));

		
	};
	const handleConfirmationPassword = (e) => {
		setConfirmationPassword(e.target.value)
	}
	useEffect(()=>{
		validationUser(userData, setAlerts, confirmationPassword)
	},[userData, confirmationPassword])

	const handleSubmint = async (e) => {
		e.preventDefault();
		const flag = validationField(userData, alerts, confirmationPassword)
		if(flag){
			try {
					const response = await axios.post('https://streamview.onrender.com/api/v1/auth/register', userData, {
					headers: {
						'Content-Type': 'application/json',
					},
					});
					console.log(response.data.message);
					/* window.location.reload(); */
				} catch (error) {
					setAlert(true)
					console.error('Error al registrar al usuario:', error);
				}
		}else{
		setAlert(!alert)
		console.log("Faltan Campos")
		}
		
}

	return (
		<>
			{vis && (
				<div
					id='conteiner'
					className='fixed top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40  overflow-auto'
				>
					<form action='#' className="w-3/5 h-5/6" onSubmit={handleSubmint}>
						<div className='relative flex flex-col items-center rounded-md bg-purple-800 gap-x-5 gap-y-1 p-10 pt-40'>
							<button
								className='absolute right-3 top-3 h-7 w-7 rounded-md bg-pink-600 hover:bg-pink-800'
								onClick={changeVis}
							>
								x
							</button>

							<div className='absolute right-20 top-10 h-24 w-24 rounded-full bg-black bg-opacity-40'>
                				<button className="h-7 w-7 bg-white rounded-full absolute bottom-0 right-0">
									<img width="48" height="48" src="https://img.icons8.com/sf-regular/48/add.png" alt="add"/>
								</button>
							</div>

							<div className='flex justify-center flex-wrap gap-x-5 text-black'>
								<div>
									<input
										className='m-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
										type='text'
										placeholder='Nombre'
										name="name"
										value={userData.name}
										onChange={handleInputChange}
									/>
									{alerts.eName && <h1 className="text-red-500 text-xs">Debe tener entre 3 y 20 caracteres</h1>}
								</div>
								<div>
									<input
										className='m-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
										type='text'
										placeholder='Apellido'
										name="surname"
										value={userData.surnmae}
										onChange={handleInputChange}
									/>
									{alerts.eSurname && <h1 className="text-red-500 text-xs">Debe tener entre 3 y 20 caracteres</h1>}
								</div>
								
							</div>
							<div className='flex justify-center flex-wrap gap-x-5 text-black'>
								<div>
									<input
										className='m-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
										type='number'
										placeholder='Telefono'
										name="phone"
										value={userData.phone}
										onChange={handleInputChange}
										
									/>
								</div>
								{alerts.ePhone && <h1 className="text-red-500 text-xs">Maxiomo de 15 caracteres</h1>}
								<div>
									<input
										className='m-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2
										invalid:border-red-600 invalid:text-red-600'
										type='email'
										placeholder='E-Mail'
										name="mail"
										value={userData.mail}
										onChange={handleInputChange}
									/>
									{alerts.eMail && <h1 className="text-red-500 text-xs">El Correo no es valido</h1>}
								</div>
							</div>
							<div className='flex justify-center flex-wrap gap-x-5 text-black'>
								<div>
									<input
										className='m-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
										type='password'
										placeholder='Contraseña'
										name="password"
										value={userData.password}
										onChange={handleInputChange}
									/>
									{alerts.eAnpassword && <h1 className="text-red-500 text-xs">Debe ser Alfanumerico</h1>}
									{alerts.ePassword && <h1 className="text-red-500 text-xs">Debe tener entre 8 y 12 caracteres</h1>}
								</div>
								
								<div>
									<input
										className='m-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
										type='password'
										placeholder='Confirmar Contraseña'
										onChange={handleConfirmationPassword}
									/>
									{alerts.eConPassword && <h1 className="text-red-500 text-xs">Las contraseñas no coinciden</h1>}
								</div>
							</div>

							<h1 className='text-center text-white m-2'>
									{alert ? <h1 className="text-red-600">hubo un problema</h1> : <h1>*todos lo campos son obligatorios*</h1>}
							</h1>
							<button
									type='submit'
									className='w-56 rounded-md border-b-2 border-b-purple-800 bg-pink-600 py-2 transition duration-200 hover:border-b-transparent hover:bg-pink-900'
							>
									Guardar
							</button>
              
						</div>
					</form>
				</div>
			)}
		</>
	);
}
