'use client'

import React, { useEffect, useState } from 'react'
import useConfetti from '../hooks/useConfetti'
import axios from 'axios'

const checkboxItems = ['word', 'article', 'note']

export default function DailyTasks() {
	const confetti = useConfetti()
	const [hasMounted, setHasMounted] = useState(false)
	const checkboxRefs: Array<HTMLInputElement | null> = []
	let setTimeOutId: any

	useEffect(() => {
		setHasMounted(true)
		return () => {
			clearTimeout(setTimeOutId)
		}
	}, [])

	const handleCheckboxChange = async (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		try {
			const allAreChecked = checkboxRefs.every((ref) => ref?.checked)
			if (!allAreChecked) return

			// add a record
			const response = await axios.get('https://api.ipify.org?format=json')
			await axios.post('/api/checkhistories', {
				ip: response.data.ip as string,
				userId: 3
			}) // todo get userId from session

			confetti.onOpen()
			setTimeOutId = setTimeout(() => {
				confetti.onClose()
			}, 3000)
		} catch (error) {
			//todo toast message  error.message
			console.log('error is', error)
		}
	}

	if (!hasMounted) return null
	return (
		<div className='flex flex-col gap-4 justify-start p-2 lg:flex-row '>
			{' '}
			{checkboxItems.map((item) => (
				<div key={item}>
					<label
						htmlFor={`checkbox${item}`}
						className='font-semibold text-xl mr-2'>
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
