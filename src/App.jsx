import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
	return (
		<div className='h-screen bg-[#23134D] bg-gradient-to-r from-[#23134D] via-secondary to-[#23134D]'>
			<BrowserRouter>
				<Navbar />
				<main className='mx-4 space-y-4 pt-[64px] md:mx-5'>
					<Routes>
						<Route path='/' element={<Home />}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
