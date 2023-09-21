'use client'

import Image from 'next/image'
import React from 'react'
import styles from './WordMemoryCard.module.css'
import { SafeNote } from '../types'

type Props = { word: SafeNote }

export default function WordMemoryCard({ word }: Props) {
	return (
		<div className={styles.flipcard}>
			<div className={styles.flipcardinner}>
				<div className={styles.flipcardfront}>
					<p className={styles.centered}>{word?.keywords}</p>
				</div>
				<div className={styles.flipcardback}>
					<p className={styles.centered}>{word?.content}</p>
				</div>
			</div>
		</div>
	)
}
