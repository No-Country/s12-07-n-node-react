import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import TechSheet from './components/TechSheet';
import Signup from './pages/Signup';

function App() {
	return (
		<div className='min-h-[calc(100vh-48px)] lg:min-h-[calc(100vh-72px)] bg-[#23134D] bg-gradient-to-r from-[#23134D] via-secondary to-[#23134D]'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/detail' element={<TechSheet />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
