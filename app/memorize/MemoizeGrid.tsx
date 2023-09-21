import React from 'react'
import { SafeNote } from '../types'
import WordMemoryCard from '../components/WordMemoryCard'

type Props = {
	newWords: SafeNote[] | null | undefined
}

export default function MemoizeGrid({ newWords }: Props) {
	if (!newWords || newWords.length === 0) return null

	return (
		<div className='flex flex-col justify-center'>
			<p> Need to memorize {newWords.length} words</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{newWords.slice(0, 9).map((word) => (
					<div key={word.id} className='justify-self-center'>
						<WordMemoryCard word={word} />
					</div>
				))}
			</div>
		</div>
	)
}
