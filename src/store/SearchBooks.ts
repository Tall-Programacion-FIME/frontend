import create from 'zustand'

type State = {
	books: any
	areThereBooks: boolean 
	//setData: any
}


const useStore = create<State>((set, get) => ({
	books: [],
	areThereBooks: true
}))

export default useStore
