export const validationUser = (userData, setAlerts, confirmationPassword) => {
	/* const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/; */
    

    if(userData.name.length == 0){
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eName: false
			}));
		
	}else if(userData.name.length < 3 || userData.name.length > 20){
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eName: true
			}));
	}else{
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eName: false
			}));
	}

	if(userData.surname.length == 0){
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eSurname: false
			}));
		
	}else if(userData.surname.length < 3 || userData.surname.length > 20){
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eSurname: true
			}));
	}else{
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eSurname: false
			}));
	}

	if(userData.password.length == 0){
		setAlerts(prevAlerts => ({
			...prevAlerts,
			ePassword: false
			}));
	}else if(userData.password.length < 8 || userData.password.length > 12 ){
		setAlerts(prevAlerts => ({
			...prevAlerts,
			ePassword: true
			}));
	}else{
		setAlerts(prevAlerts => ({
			...prevAlerts,
			ePassword: false
			}));
	}

	if(userData.password === confirmationPassword){
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eConPassword: false
			}));
	}else{
		setAlerts(prevAlerts => ({
			...prevAlerts,
			eConPassword: true
			}));
	}
}

export const validationField = (userData, alerts, confirmationPassword)=>{
	if(userData.name === ""){
		return false
	}else if(userData.surname === ""){
		return false
	}else if(userData.mail === ""){
		return false
	}else if(userData.password === ""){
		return false
	}else if(confirmationPassword === ""){
		return false
	}else if(alerts.eName){
		return false
	}else if(alerts.eSurname){
		return false
	}else if(alerts.ePhone){
		return false
	}else if(alerts.ePassword){
		return false
	}else if(alerts.eAnpassword){
		return false
	}else if(alerts.eConPassword){console.log(":(")
		return false
	}
return true
}