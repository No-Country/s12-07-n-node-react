import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import TechSheet from './components/TechSheet';
import Search from './pages/search.jsx/Search';
import Platform from './components/Platform';

function App() {
	return (
		<div className='min-h-[calc(100vh-48px)] bg-[#23134D] bg-gradient-to-r from-[#23134D] via-secondary to-[#23134D] lg:min-h-[calc(100vh-72px)]'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/detail' element={<TechSheet />} />
					<Route path='/search' element={<Search />} />
					<Route path='/platform/:platform' element={<Platform />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
