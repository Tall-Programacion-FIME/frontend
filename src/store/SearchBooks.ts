import create from 'zustand'

type State = {
	data: any
	detail: string
	//setData: any
}


const useStore = create<State>((set, get) => ({
	data: [],
	detail: ""
	//setData: () => set(state => ({ data: state.data }))
}))

export default useStore
