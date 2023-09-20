import { create } from 'zustand'

interface LoaderState {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const useLoader = create<LoaderState>((set) => ({
	isOpen: false,
	onOpen: () => set(() => ({ isOpen: true })),
	onClose: () => set(() => ({ isOpen: false }))
}))

export default useLoader
