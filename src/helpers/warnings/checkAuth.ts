import useStore from '../../store/MessageState'


function checkAuth(param: string) {
	if (param === 'pass') {
		useStore.setState({ 
			isMessage: true, 
			message: "Autenticación completa", 
			typeMessage:'pass' 
		});
	} else {
		useStore.setState({ 
			isMessage: true, 
			message: "Error en la Autenticación", 
			typeMessage:'error' 
		});
	}
}

export default checkAuth 
