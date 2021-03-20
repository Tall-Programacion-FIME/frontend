import create from 'zustand'

type State = {
	data: any
	setData: any
}


const useStore = create<State>(set => ({
	data: [],
	setData: () => set(state => ({ data: state.data }))
}))

export default useStore
