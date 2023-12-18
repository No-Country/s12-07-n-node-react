/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [termSearch, setTermSearch] = useState('');
	const [auth, setAuth] = useState(true);
	const [user, setUser] = useState({
		id: 1,
		name: 'Patricio',
		mail: '',
		token: '',
		phone: '',
		needsNotificacion: false,
	});

	const register = () => {};
	const login = () => {};
	const logout = () => {};

	return (
		<AuthContext.Provider
			value={{ termSearch, setTermSearch, auth, setAuth, user, setUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};
