'use client'

import React, { useEffect, useState } from 'react'
import useConfetti from '../hooks/useConfetti'

const checkboxItems = ['word', 'article', 'note']

export default function DailyTasks() {
	const confetti = useConfetti()
	const [hasMounted, setHasMounted] = useState(false)
	const checkboxRefs: Array<HTMLInputElement | null> = []

	useEffect(() => {
		setHasMounted(true)
	}, [])

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const allAreChecked = checkboxRefs.every((ref) => ref?.checked)
		if (!allAreChecked) return

		confetti.onOpen()
		setTimeout(() => {
			confetti.onClose()
		}, 3000)
	}

	if (!hasMounted) return null
	return (
		<div className='flex flex-col justify-items-start lg:flex-row '>
			{' '}
			{checkboxItems.map((item) => (
				<div key={item}>
					<label htmlFor={`checkbox${item}`} className='font-semibold '>
						{item}
					</label>
					<input
						ref={(ref) => checkboxRefs.push(ref)}
						type='checkbox'
						id={`checkbox${item}`}
						name='tasks'
						className='default:ring-2'
						onChange={handleCheckboxChange}
					/>
				</div>
			))}
		</div>
	)
}
