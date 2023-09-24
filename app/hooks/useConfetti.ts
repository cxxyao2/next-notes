import { create } from 'zustand'

interface ConfettiState {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const useConfetti = create<ConfettiState>((set) => ({
	isOpen: false,
	onOpen: () => set(() => ({ isOpen: true })),
	onClose: () => set(() => ({ isOpen: false }))
}))

export default useConfetti
