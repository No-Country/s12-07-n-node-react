/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#50075D',
				secondary: '#D20DF3',
				tertiary: '#B0C9FB',
				accent: '#89169C',
			},
			fontFamily: {
				roboto: ['Roboto Flex', 'sans-serif'],
				karla: ['Karla', 'sans-serif'],
			},
		},
	},
	plugins: [import('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#50075D',
					secondary: '#D20DF3',
					tertiary: '#B0C9FB',
					accent: '#89169C',
					neutral: '#C9C9C9',
					'base-100': '#ffff',
					info: '#3abff8',
					success: '#0FA958',
					warning: '#FFC700',
					error: '#CF3342',
				},
			},
		],
		base: false,
		styled: true,
		utils: true,
		rtl: false,
		prefix: '',
		logs: true,
	},
};
