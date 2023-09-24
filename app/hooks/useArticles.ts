import { create } from 'zustand'
import { SafeNote } from '../types'

interface ArticlesState {
	articles: SafeNote[]
	setArticles: (arts:SafeNote[]) => void
}

const useArticles = create<ArticlesState>((set) => ({
	articles: [],
	setArticles: (arts) => set( ({ articles:arts }))
}))

export default useArticles
