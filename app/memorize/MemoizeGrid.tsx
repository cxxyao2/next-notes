'use client'

import React, { useState } from 'react'
import { SafeNote } from '../types'
import WordMemoryCard from '../components/WordMemoryCard'
import axios from 'axios'
import toast from 'react-hot-toast'

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
	const [words, setWords] = useState<SafeNote[]>(newWords || [])

	if (!newWords || newWords.length === 0) return null
	const handleClick = async (word: SafeNote) => {
		try {
			setWords(words.filter((w) => w.id !== word.id))
			await axios.put(`/api/mynotes/${word.id}`, { memoized: true })
			toast.success(`Memorized ${word.keywords}`)
		} catch (error) {
			toast.error(JSON.stringify(error))
		}
	}

	return (
		<div className='flex flex-col justify-center'>
			<p className='text-center m-4 text-2xl font-semifold'>
				{' '}
				Need to memorize{' '}
				<span className='text-rose-800 dark:text-rose-200'>
					{words.length}
				</span>{' '}
				words
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{words.slice(0, 9).map((word, index) => (
					<div key={word.id} className='justify-self-center'>
						<WordMemoryCard
							word={word}
							frontColor={frontColors[index]}
							onClick={() => handleClick(word)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
