'use client'

import Image from 'next/image'
import React from 'react'

type Props = { imageName: string }

export default function WordCardSkeleton({ imageName }: Props) {
	return (
		<div className='animate-pulse col-span-1 cursor-pointer group'>
			<div className='flex flex-col gap-2 w-full'>
				<div
					className='
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          '>
					<div
						className='
						bg-gray-400
              h-full
              w-full

            '></div>
				</div>
        	<div className=' bg-gray-500 w-3/5 h-8 rounded-lg'></div>
			<div className='bg-gary-500 w-2/5 h-8 rounded-lg'></div>
			</div>


		</div>
	)
}
