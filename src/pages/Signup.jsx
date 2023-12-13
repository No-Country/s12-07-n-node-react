/* import React from 'react' */

import { useState } from "react";
import axios  from 'axios';


export default function Signup({ vis, setVis }) {
  const changeVis = () => {
    setVis(!vis);
  }
  const [userData, setUserData] = useState({
	mail: 'test1@correo.com',
	password: '123456789',
	name: 'user1',
	surname: 'surname1',
	phone: '123456789',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const manSubmint = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post('https://streamview.onrender.com/api/v1/auth/register', userData, {
			  headers: {
				'Content-Type': 'application/json',
			  },
			});
			console.log("PE", response.data.message);
		} catch (error) {
			console.error('Error al registrar al usuario:', error);
		  }
  }

	return (
		<>
			{vis && (
				<div
					id='conteiner'
					className='fixed top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40  overflow-auto'
				>
					<form action='#' className="w-3/5 h-5/6" onSubmit={manSubmint}>
						<div className='relative flex flex-col items-center rounded-md bg-purple-800 p-10 pt-40 gap-5'>
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

							<div className='flex justify-center flex-wrap gap-5 text-black'>
								<input
									className='mx-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
									type='text'
									placeholder='Nombre'
								/>
								<input
									className='mx-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
									type='text'
									placeholder='Apellido'
								/>
							</div>
							<div className='flex justify-center flex-wrap gap-5 text-black'>
								<input
									className='mx-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
									type='number'
									placeholder='Telefono'
									
								/>
								<input
									className='mx-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2
									invalid:border-red-600 invalid:text-red-600'
									type='email'
									placeholder='E-Mail'
									
								/>
							</div>
							<div className='flex justify-center flex-wrap gap-5 text-black'>
								<input
									className='mx-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
									type='number'
									placeholder='Contraseña'
									
								/>
								<input
									className='mx-1 h-10 w-56 rounded-md border-2 border-blue-400 p-2'
									type='number'
									placeholder='Confirmar Contraseña'
								/>
							</div>

							<h1 className='text-center text-white'>
									*Campos Obligatorios*
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
