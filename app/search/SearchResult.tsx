'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function SearchResult({}: Props) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null
	const handleSubmit = () => {
		// todo
		// axios.post('/api/search', {
		// 	keywords: keywords
		// })
	}

	return (
		<form
			className='flex flex-col items-center justify-center w-full'
			onSubmit={handleSubmit}>
			<h1 className='font-extrabold text-4xl max-w-full my-8'>
				Search your favorite notes:
			</h1>
			<div className='relative my-4  mb-6 max-w-full w-5/6 dark:bg-neutral-600'>
				<div className='flex border-2 border-gray-300 rounded-md overflow-hidden shadow justify-center'>
					<div className="flex-1 flex items-center p-2  ">
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							aria-hidden='true'
							className='text-gray-400 dark:text-gray-100 h-5 w-5'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<label className='sr-only' htmlFor='keywords'>
							keywords
						</label>
						<input
							type='text'
							id='keywords'
							className='w-full min-w-0 pl-11 outline-none dark:bg-neutral-600'
							placeholder='enter keywords...'
							autoComplete='off'
							spellCheck='false'
						/>
					</div>
					<div>
						<button
							type='submit'
							className='h-full align-middle px-4 py-2 whitespace-nowarp border-1 border-gray-300 bg-blue-500 hover:bg-blue-400/60 translation-all duration-75'>
							Search
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}
