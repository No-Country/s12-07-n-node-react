import React, { useState } from 'react';

import 'daisyui/dist/full.css'; // Import the daisyUI CSS file
import { profileIcon, menuIcon } from '../assets/icons';
import { Link } from 'react-router-dom';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

function Navbar2() {
	const [signinVisible, setSigninVisible] = useState(false);
	const [signupVisible, setSignupVisible] = useState(false);

	const handleClick = () => {
		const elem = document.activeElement;
		console.log(elem);
		if (elem) {
			elem?.blur();
		}
	};
	const handleClickSignin = () => {
		setSigninVisible(!signinVisible);
	};
	const handleClickSignup = () => {
		setSignupVisible(!signupVisible);
	};
	return (
		<div className='navbar bg-base-100 z-[100] bg-primary text-white'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm  dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 bg-primary p-2 text-white shadow'
					>
						<li className=''>
							<a>Géneros</a>
							<ul className='p-2'>
								<li onClick={handleClick}>
									<Link to={'/genero/accion'}>Acción</Link>
								</li>
								<li onClick={handleClick}>
									<Link to={'/genero/drama'}>Drama</Link>
								</li>
								<li onClick={handleClick}>
									<Link to={'/genero/terror'}>Terror</Link>
								</li>
								<li onClick={handleClick}>
									<Link to={'/genero/romance'}>Romance</Link>
								</li>
							</ul>
						</li>
						<li onClick={handleClick}>
							<Link to={'/#actores'}>Actores</Link>
						</li>
						<li onClick={handleClick}>
							<Link to={'proximos-estrenos'}>Próximos estrenos</Link>
						</li>
						<li onClick={handleClick}>
							<Link to={'mi-lista'}>Mi lista</Link>
						</li>
					</ul>
				</div>
				<Link to={'/'} className='btn btn-ghost text-xl'>
					<span className='hidden md:block'>STREAMVIEW</span>
					<span className='block md:hidden '>SV</span>
				</Link>
			</div>
			<div className='navbar-center '>
				<ul className='menu menu-horizontal hidden   px-1 lg:flex'>
					<li>
						<details className=''>
							<summary>Géneros</summary>
							<ul className='z-10 bg-primary p-2 text-white'>
								<li onClick={handleClick}>
									<Link to={'genero/accion'}>Acción</Link>
								</li>
								<li>
									<Link to={'genero/drama'}>Drama</Link>
								</li>
								<li>
									<Link to={'genero/terror'}>Terror</Link>
								</li>
								<li>
									<Link to={'genero/romance'}>Romance</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link to={'/#actores'}>Actores</Link>
					</li>
					<li>
						<Link to={'proximos-estrenos'}>Próximos estrenos</Link>
					</li>
					<li>
						<Link to={'mi-lista'}>Mi lista</Link>
					</li>
				</ul>
				<div className='text-black'>
					<input
						type='text'
						placeholder='Busca'
						className='input input-bordered input-sm w-full max-w-xs'
					/>
				</div>
			</div>
			<div className='navbar-end'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost '>
						{/* <svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg> */}
						<div className=''>
							<div className='cursor-pointer px-4'>
								<img
									className='h-6 w-6 object-cover'
									src={profileIcon}
									alt='Icono de usuario'
								/>
							</div>
						</div>
					</div>
					<ul
						tabIndex={0}
						className='menu  dropdown-content bg-base-100 rounded-box right-0 z-[10] mr-4 mt-3 w-52 bg-primary p-2 text-white shadow'
					>
						<li onClick={handleClick}>
							<button onClick={handleClickSignin}>Iniciar Sesion</button>
						</li>
						<li onClick={handleClick}>
							<button onClick={handleClickSignup}>Registrarse</button>
						</li>
					</ul>
				</div>
			</div>
			{/* <Signup vis={signupVisible} setVis={setSignupVisible} />
			<Signin vis={signinVisible} setVis={setSigninVisible} /> */}
		</div>
	);
}

export default Navbar2;
