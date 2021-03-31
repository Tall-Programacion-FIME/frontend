import create from 'zustand'

type State = {
	access_token: string 
	refresh_token: string 
	isAuthenticated: boolean
}


const useStore = create<State>((set, get) => ({
	access_token: '',
	refresh_token: '',
	isAuthenticated: false 
}))

export default useStore
