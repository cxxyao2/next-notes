import { create } from 'zustand'

interface useConfetti {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const useConfetti = create<useConfetti>((set) => ({
	isOpen: false,
	onOpen: () => set(() => ({ isOpen: true })),
	onClose: () => set(() => ({ isOpen: false }))
}))

export default useConfetti
