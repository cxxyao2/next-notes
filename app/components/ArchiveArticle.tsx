'use client'

import Image from 'next/image'
import React from 'react'

type Props = {
	imageSrc: string
}

export default function ArchiveArticle({ imageSrc }: Props) {
	return (
		<div className='w-full pb-2 border-b-2 border-blue-800 dark:border-blue-300 flex  flex-col-reverse  lg:flex-row-reverse justify-between'>
			<div className='flex-1 p-4'>
				<div>title:content</div>
				<div>
					By AMily <span>Date: Feb.15, 2023</span>
				</div>
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
				<div>Category: Finance</div>
			</div>
		</div>
	)
}
