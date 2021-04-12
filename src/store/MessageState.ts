import create from 'zustand'

type State = {
	isMessage: boolean 
	message: string 
	typeMessage?: string
	isPermanent?: boolean 
	//setData: any
}


const useStore = create<State>((set, get) => ({
	message: '',
	isMessage: false, 
	typeMessage: '',
	isPermanent: true
}))

export default useStore
