'use client'

import React from 'react'
import { SafeNote } from '../types'
import WordMemoryCard from '../components/WordMemoryCard'

type Props = {
	newWords: SafeNote[] | null | undefined
}

const frontColors = [
	'bg-blue-200',
	'bg-green-200',
	'bg-yellow-200',
	'bg-red-200',
	'bg-indigo-200',
	'bg-purple-200',
	'bg-pink-200',
	'bg-neutral-200',
	'bg-green-200'
]

export default function MemoizeGrid({ newWords }: Props) {
	if (!newWords || newWords.length === 0) return null
	// todo update array and database
	const handleClick = (wordId: string) => {
		console.log('wordId is', wordId)
	}

	return (
		<div className='flex flex-col justify-center'>
			<p className='text-center m-4 text-2xl font-semifold'>
				{' '}
				Need to memorize{' '}
				<span className='text-rose-800 dark:text-rose-200'>
					{newWords.length}
				</span>{' '}
				words
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{newWords.slice(0, 9).map((word, index) => (
					<div key={word.id} className='justify-self-center'>
						<WordMemoryCard
							word={word}
							frontColor={frontColors[index]}
							onClick={() => handleClick(word.id)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
