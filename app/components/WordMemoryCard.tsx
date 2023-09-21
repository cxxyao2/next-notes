'use client'

import React from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import styles from './WordMemoryCard.module.css'
import { SafeNote } from '../types'

type Props = { word: SafeNote; frontColor: string; onClick: () => void }

export default function WordMemoryCard({ word, frontColor, onClick }: Props) {
	return (
		<div className={styles.flipcard}>
			<div className={styles.flipcardinner}>
				<div className={`${styles.flipcardfront} ${frontColor}`}>
					<p className={styles.centered}>{word?.keywords}</p>
				</div>
				<div className={styles.flipcardback}>
					<p className={styles.centered}>{word?.content}</p>
					<button
						type='button'
						onClick={onClick}
						aria-label='Memorized this word'>
						<FiCheckSquare className='absolute top-4 right-4 text-white-200 w-6 h-6'></FiCheckSquare>
					</button>
				</div>
			</div>
		</div>
	)
}
