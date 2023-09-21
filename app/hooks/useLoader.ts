import { create } from 'zustand'

interface LoaderState {
	isLoading: boolean
	onOpen: () => void
	onClose: () => void
}

const useLoader = create<LoaderState>((set) => ({
	isLoading: false,
	onOpen: () => set(() => ({ isLoading: true })),
	onClose: () => set(() => ({ isLoading: false }))
}))

export default useLoader
