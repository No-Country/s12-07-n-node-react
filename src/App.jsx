import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import TechSheet from './components/TechSheet';
import Search from './pages/search.jsx/Search';
import Platform from './components/Platform';
import GenreFilter from './components/GenreFilter';
import Actor from './pages/actor/Actor';
import UpComing from './components/UpComing';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { authUser } from './services/user';

function App() {
	const {setUser, setAuth} = useContext(AuthContext);

	useEffect(()=>{
		
	const loginUser = async ()=>{
		try {
			const response = await authUser()
			console.log(response.data)
			setAuth(true);
			setUser(prevUser => ({
				...prevUser,
				...response.data.userInfo,
			}));
			console.log(response.data.userInfo)
		} catch (error) {
			console.error('Error al auntenticar usuario:', error);
		}

		
	}
	loginUser()
	}, [setUser, setAuth])

	return (
		<div className='background-img-gradient min-h-[calc(100vh-48px)] bg-[#23134D] bg-gradient-to-r from-[#23134D] via-secondary to-[#23134D] lg:min-h-[calc(100vh-72px)]'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/upcoming' element={<UpComing />} />
					<Route path='/detail/:type/:id' element={<TechSheet />} />
					<Route path='/actor/:id' element={<Actor />} />
					<Route path='/search' element={<Search />} />
					<Route path='/platform/:platform' element={<Platform />} />
					<Route path='/genre/:genre' element={<GenreFilter />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
