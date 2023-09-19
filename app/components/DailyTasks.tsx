'use client'

import React, { useEffect, useState } from 'react'
import useConfetti from '../hooks/useConfetti'
import axios from 'axios'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

const checkboxItems = ['word', 'article', 'note']

export default function DailyTasks() {
	const confetti = useConfetti()
	const [hasMounted, setHasMounted] = useState(false)
	const checkboxRefs: Array<HTMLInputElement | null> = []
	const { data: session } = useSession()
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
		<div className='relative left-0 top-0 flex flex-col w-full justify-center border-b space-y-4 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
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
			<div className='rounded-lg p-2'>
				<Image
					src={session?.user?.image || '/images/avatar-placeholder.jpg'}
					width={100}
					height={100}
					className='w-8 h-8 rounded-full border-2 border-gray-500 inline-block'
					alt='avatar'
				/>
				<span className='ml-2 text-sm'>{session?.user?.name || 'Please log in.'}</span>
			</div>
		</div>
	)
}
