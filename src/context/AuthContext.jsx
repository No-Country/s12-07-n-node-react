/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [termSearch, setTermSearch] = useState('');
	const [auth, setAuth] = useState(false);
	const [user, setUser] = useState({});
	return (
		<AuthContext.Provider
			value={{ termSearch, setTermSearch, auth, setAuth, user, setUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};
