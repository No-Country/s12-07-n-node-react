import React from 'react';

import 'daisyui/dist/full.css'; // Import the daisyUI CSS file
import { Link } from 'react-router-dom';
import { profileIcon, menuIcon } from '../assets/icons';

function Navbar2() {
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
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 bg-primary p-2 text-white shadow'
					>
						<li className=''>
							<a>Géneros</a>
							<ul className='p-2'>
								<li>
									<a>Acción</a>
								</li>
								<li>
									<a>Drama</a>
								</li>
								<li>
									<a>Terror</a>
								</li>
								<li>
									<a>Romance</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Actores</a>
						</li>
						<li>
							<a>Próximos estrenos</a>
						</li>
						<li>
							<a>Mi lista</a>
						</li>
					</ul>
				</div>
				<Link to={'/'} className='btn btn-ghost text-xl'>
					<span className='hidden md:block'>STREAMVIEW</span>
					<span className='block md:hidden '>SV</span>
				</Link>
			</div>
			<div className='navbar-center '>
				<ul className='menu menu-horizontal hidden px-1 lg:flex'>
					<li>
						<details>
							<summary>Géneros</summary>
							<ul className='z-10 bg-primary p-2 text-white'>
								<li>
									<a>Acción</a>
								</li>
								<li>
									<a>Drama</a>
								</li>
								<li>
									<a>Terror</a>
								</li>
								<li>
									<a>Romance</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a>Actores</a>
					</li>
					<li>
						<a>Próximos estrenos</a>
					</li>
					<li>
						<a>Mi lista</a>
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
				<div className=''>
					<div className='cursor-pointer px-4'>
						<img
							className='h-6 w-6 object-cover lg:h-8 lg:w-8'
							src={profileIcon}
							alt='Icono de usuario'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar2;
