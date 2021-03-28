import create from 'zustand'

type State = {
	isMessage: boolean 
	message: string 
	//setData: any
}


const useStore = create<State>((set, get) => ({
	message: '',
	isMessage: false 
}))

export default useStore
