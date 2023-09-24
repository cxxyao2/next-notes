'use client'

import Image from 'next/image'
import React from 'react'
import { SafeNote } from '../types'
import Link from 'next/link'

type Props = {
	archive: SafeNote
	imageSrc: string
}

export default function ArchiveArticle({ archive, imageSrc }: Props) {
	return (
		<div className='w-full pb-2 border-b-2 border-neutral-200  flex  flex-col-reverse  lg:flex-row-reverse justify-between'>
			<div className='flex-1 p-4'>
				<div className='text-lg  font-semibold'>
					<Link
						className='text-rose-600 dark:text-rose-200 hover:underline hover:under-rose-600 dark:hover:underline-rose-200 '
						href={`/note/${archive.id}`}>
						{archive.keywords}
					</Link>
				</div>
				<div className='text-sm'>
					By Amily Paro{' '}
					<span>{new Date(archive.occurredAt).toLocaleDateString()}</span>
				</div>
				<div
					className='mt-6
    first-letter:text-2xl first-letter:font-bold first-letter:text-slate-900 dark:first-letter:text-slate-200
  first-letter:mr-3 first-letter:float-left '>
					{archive.content.substring(0, 100)}
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
						priority
					/>
				</div>
				<span className='inline-block bg-neutral-200 dark:bg-neutral-800 p-1 m-1 rounded-lg text-center'>
					Finance
				</span>
			</div>
		</div>
	)
}
