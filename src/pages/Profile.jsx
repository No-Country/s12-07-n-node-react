import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile({ vis, setVis }) {
	const changeVis = () => {
		setVis(!vis);
	};

	const { user } = useContext(AuthContext)
	
	const handleClick = () => {
		localStorage.removeItem("Token")
		window.location.reload();
	}

	return (
		<>
			{vis && (
				<div
					id='conteiner'
					className='fixed top-0 flex h-full w-full items-center justify-center overflow-auto bg-black  bg-opacity-40'
				>
					<div className='relative flex flex-col items-center rounded-md bg-purple-800 gap-x-5 gap-y-1 p-10 py-30'>
						<button
							className='absolute right-3 top-3 h-7 w-7 rounded-md bg-pink-600 hover:bg-pink-800'
							onClick={changeVis}
						>
						x
						</button>


						<div className='flex justify-center flex-wrap gap-x-5 my-5'>
							<h1>Nombre: {user.name}</h1>
							<h1>Apellido: {user.surname}</h1>
						</div>
						<div className='flex justify-center flex-wrap gap-x-5 my-5'>
							<h1>Telefono: {user.phone}</h1>
							<h1>E-mail: {user.mail}</h1>
						</div>

						<div className="my-5">
							<label htmlFor="noti">¿Desea recibir notificaciones via mail de los estrenos de sus series favoritas?:</label>
							<input type="checkbox" value="noti"/>
						</div>

						<button
							type='submit'
							className='m-2 w-56 rounded-md border-b-2 border-b-purple-800 bg-pink-600 py-2 transition duration-200 hover:border-b-transparent hover:bg-pink-900'
							onClick={handleClick}
						>
							Cerrar Sesion
						</button>
                    </div>
				</div>
			)}
		</>
	);
}
