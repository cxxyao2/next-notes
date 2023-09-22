'use client'

import React, { useState, useEffect } from 'react'
import { TOPICPLACEHOLDERS } from '../data/consts'
import { GrView } from 'react-icons/gr'

type Props = {}

export default function HomeExcerptList({}: Props) {
	const [mounted, setMounted] = useState(false)
	const placeholders = TOPICPLACEHOLDERS

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<div className='my-6 grid grid-cols-1 text-left gap-4 lg:max-w-5xl w-full lg:mb-0  lg:text-left'>
			{placeholders.map((item) => (
				<a
					key={item.title}
					href='#'
					className='  w-full group rounded-lg border border-neutral-400  px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						{item.title}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm`}>{item.author} <span className='ml-6 opacity-80'>{item.date}</span></p>
					<div className='flex mt-4 '><GrView className='w-5 h-5  mr-4' />{item.viewCount}</div>
				</a>
			))}
		</div>
	)
}
