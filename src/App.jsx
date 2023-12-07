import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
	return (
		<div className='h-full bg-[#23134D] bg-gradient-to-r from-[#23134D] via-secondary to-[#23134D]'>
			<BrowserRouter>
				<Navbar />
				<main className='mx-4 space-y-4 pt-[64px] md:mx-5'>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/signup' element={<Signup />}></Route>
						<Route path='/signin' element={<Signin />}></Route>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
