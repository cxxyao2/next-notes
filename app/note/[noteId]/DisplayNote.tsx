import { SafeNote } from '@/app/types'
import { EyeIcon } from '@heroicons/react/24/outline'
import React from 'react'


type Props = { note: SafeNote }

export default function DisplayNote({ note }: Props) {
	return (
		<>
			<h1 className='mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
				Article
			</h1>

			<div className='m-auto border-bottom border-bottom-info'>
				<div className='font-semibold flex'>

					<EyeIcon
						width={24}
						height={24}
						className='text-muted  rounded ml-4 mr-2'></EyeIcon>
					<span className='text-gray-800/75 dark:text-gray-200'>
						{note.viewCounter || 1}
					</span>
				</div>

				<div
					className='p-2 rounded whitespace-pre-wrap'
				>{note.content}</div>
			</div>
		</>
	)
}
