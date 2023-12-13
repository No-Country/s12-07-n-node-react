/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [termSearch, setTermSearch] = useState('');

	return (
		<AuthContext.Provider value={{ termSearch, setTermSearch }}>
			{children}
		</AuthContext.Provider>
	);
};
