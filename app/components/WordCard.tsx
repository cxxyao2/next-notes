'use client'

import Image from 'next/image'
import React from 'react'

type Props = {}

export default function WordCard({}: Props) {
	return (
		<>
			<div className='rounded-lg border-2 border-gray-400 shadow-sm w-full'>
			<Image
				src='/images/a3.webp'
				height={320}
				width={480}
				className='object-cover'
				alt='ketching room'
			/>
			<div className='flex flex-col p-2'>
				<div>Ketching room</div>
				<div>price:100</div>
			</div>
			</div>

		</>
	)
}
