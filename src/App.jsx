import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar2 from './components/Navbar2';
import Home from './pages/home/Home';
import TechSheet from './components/TechSheet';
import Search from './pages/search.jsx/Search';
import GeneroAccion from './pages/GeneroAccion';
import GeneroRomance from './pages/GeneroRomance';
import GeneroDrama from './pages/GeneroDrama';
import GeneroTerror from './pages/GeneroTerror';
import ProximosEstrenos from './pages/ProximosEstrenos';
import MiLista from './pages/MiLista';
import NotFoundPage from './pages/NotFoundPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
	return (
		<div className='min-h-[calc(100vh-48px)] bg-[#23134D] bg-gradient-to-r from-[#23134D] via-secondary to-[#23134D] text-white lg:min-h-[calc(100vh-72px)]'>
			<BrowserRouter>
				<Navbar2 />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='genero/accion' element={<GeneroAccion />} />
					<Route path='genero/drama' element={<GeneroDrama />} />
					<Route path='genero/terror' element={<GeneroTerror />} />
					<Route path='genero/romance' element={<GeneroRomance />} />

					<Route path='proximos-estrenos' element={<ProximosEstrenos />} />
					<Route path='mi-lista' element={<MiLista />} />
					<Route path='/detail' element={<TechSheet />} />
					<Route path='/search' element={<Search />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
