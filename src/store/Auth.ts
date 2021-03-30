import create from 'zustand'

type State = {
	accessToken: string 
	refreshToken: string 
	isAuthenticated: boolean
}


const useStore = create<State>((set, get) => ({
	accessToken: '',
	refreshToken: '',
	isAuthenticated: false 
}))

export default useStore
