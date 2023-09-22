'use client'

import React, { useEffect, useState } from 'react'
import useConfetti from '../hooks/useConfetti'
import axios from 'axios'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { SafeUser } from '../types'
import { CATEGORIES } from '../data/consts'

interface DailyTasksProps {
	currentUser: SafeUser | null | undefined
}

export default function DailyTasks({ currentUser }: DailyTasksProps) {
	const confetti = useConfetti()
	const [hasMounted, setHasMounted] = useState(false)
	const checkboxRefs: Array<HTMLInputElement | null> = []
	const checkboxItems = CATEGORIES

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

			const response = await axios.get('https://api.ipify.org?format=json')
			await axios.post('/api/checkhistories', {
				ip: response.data.ip as string,
				userId: currentUser?.id
			})

			confetti.onOpen()
			setTimeOutId = setTimeout(() => {
				confetti.onClose()
			}, 3000)
		} catch (error) {
			console.error('error is', error)
		}
	}

	if (!hasMounted) return null

	return (
		<div className='relative left-0 top-0 flex flex-col w-full justify-center border-b space-y-4 border-gray-300   pb-6 pt-8    lg:w-auto  lg:rounded-xl lg:border  lg:p-4   bg-gradient-to-r from-indigo-400 dark:from-indigo-800 via-purple-400 dark:via-purple-800 to-pink-500 dark:to-neutral-800 dark:border-neutral-200'>
			<div className='flex flex-col gap-4 justify-start p-2 lg:flex-row '>
				<div className='self-center text-xl font-semibold '>Daily tasks:</div>
				{checkboxItems.map((item) => (
					<div key={item}>
						<label
							htmlFor={`checkbox${item}`}
							className=' text-xl mr-2'>
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
					width={48}
					height={48}
					className='rounded-full border-2 border-gray-500 inline-block'
					alt='avatar'
				/>
				<div className='inline-block ml-2 text-sm'>
					{session?.user ? (
						<div className='inline-block'>
							<span className='mr-6'>{session.user.name}</span>
							<Link
								href='/memorize'
								className='group rounded-lg border border-transparent px-5 py-4   '>
								<h3
									className={`inline-block mb-3 text-xl font-semibold hover:underline hover:underline-offset-4 hover:decoration-blue-800  dark:hover:decoration-blue-400`}>
									Start
									<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
										-&gt;
									</span>
								</h3>
							</Link>
						</div>
					) : (
						<Link
							href='/login'
							className='text-blue-800 dark:text-blue-400 text-xl font-semibold underline underline-offset-8 decoration-slate-200 '>
							Please log in.
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
