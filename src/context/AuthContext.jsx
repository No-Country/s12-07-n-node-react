/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { registerUser, authUser, loginUser } from '../services/user';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [termSearch, setTermSearch] = useState('');
	const [auth, setAuth] = useState(false);
	const [error, setError] = useState(null);
	const [user, setUser] = useState({});

	const register = async dataUser => {
		try {
			const data = await registerUser(dataUser);
			if (data.token) {
				setAuth(true);
				localStorage.setItem('token', data.token);
				setUser(data);
			} else {
				setError('Registro Invalido');
			}
		} catch (error) {
			setError(error);
			console.error(error);
		}
	};

	const login = async dataUser => {
		try {
			const data = await loginUser(dataUser);
			if (data.token) {
				setAuth(true);
				localStorage.setItem('token', data.token);
				setUser(data);
			} else {
				setError('Login Invalido');
			}
		} catch (error) {
			setError(error);
			console.error(error);
		}
	};
	const checkAuth = async token => {
		try {
			const data = await authUser(token);
			if (data.user) {
				setAuth(true);
				localStorage.setItem('token', data.token);
				setUser(data);
			} else {
				setError('Login Invalido');
			}
		} catch (error) {
			setError(error);
			console.error(error);
		}
	};
	const logout = () => {
		setAuth(false);
		localStorage.removeItem('token');
		setUser({});
	};

	return (
		<AuthContext.Provider
			value={{
				termSearch,
				setTermSearch,
				auth,
				setAuth,
				user,
				setUser,
				register,
				login,
				logout,
				error,
				checkAuth,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
