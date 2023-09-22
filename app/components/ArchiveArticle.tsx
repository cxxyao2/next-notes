'use client'

import Image from 'next/image'
import React from 'react'

type Props = {
	imageSrc: string
}

export default function ArchiveArticle({ imageSrc }: Props) {
	return (
		<div className='w-full pb-2 border-b-2 border-neutral-200  flex  flex-col-reverse  lg:flex-row-reverse justify-between'>
			<div className='flex-1 p-4'>
				<div className='text-lg font-semibold'>Climate changes</div>
				<div className='text-sm'>
					By Amily Paro <span>Feb.15, 2023</span>
				</div>
				<div className='mt-6'>A third of the world’s people do not get early warnings of extreme weather. The UN action plan aims to have everyone covered by 2027.</div>
			</div>
			<div className='p-4'>
				<div className='relative'>
					<Image
						src={imageSrc}
						width='400'
						height='300'
						alt='picture of diary'
						className=' w-full lg:w-36 lg:h-36 object-cover rounded-md'
					/>
				</div>
				<span className='inline-block bg-neutral-200 p-1 m-1 rounded-lg text-center'>Finance</span>
			</div>
		</div>
	)
}
