import useStore from '../../store/MessageState'

function checkProduction() {
	if (process.env.NODE_ENV === 'production') {
		return true
	} else {
		return false
	}

}

function Production() {
	const isProduction = checkProduction();
	if (!isProduction) {
		useStore.setState({ isMessage: true, message: "No estás en el modo de producción!!", typeMessage:'warning' });
	}
}

export default Production
