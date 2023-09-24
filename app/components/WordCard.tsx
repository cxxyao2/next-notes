'use client'

import Image from 'next/image'
import React from 'react'

type Props = { imgSrc:string, title:string,category:string }

export default function WordCard({ imgSrc,title,category }: Props) {
	return (
		<div className='col-span-1 cursor-pointer'>
			<div className='flex flex-col justify-start gap-2 w-full shadow-sm'>
				<div
					className='
            relative
            overflow-hidden
            rounded-xl
          '>
					<Image
						className='
              object-cover
              transition
							hover:scale-110
            '
						src={imgSrc}
						width={300}
						height={300}
						alt='industry image'
						priority
					/>
				</div>

				<div className='font-semibold text-lg'>{title}</div>
				<div className='font-light text-neutral-500'>{category}</div>

			</div>
		</div>
	)
}
