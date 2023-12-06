import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';

function App() {
	return (
		<div className='h-screen bg-[#23134D] bg-gradient-to-r from-[#23134D] via-secondary to-[#23134D]'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
