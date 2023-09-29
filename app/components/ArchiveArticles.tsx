'use client'

import React, { useEffect } from 'react'
import ArchiveArticle from './ArchiveArticle'
import { SafeNote } from '../types'



type Props = {
		myArticles: SafeNote[] | undefined | null
}

export default function ArchiveArticles({myArticles}: Props) {
	const imageSrcs = [
		'/images/a3.webp',
		'/images/a4.webp',
		'/images/a5.jpg',
		'/images/a6.jpg'
	]



	useEffect(() => {
		fetch('/api/mynotes', { cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => {
				console.log('new articles,', data)
			})
	}, [])

	if(!myArticles || myArticles.length===0) return <div>No articule found.</div>

	return (
		<>
			<div className='flex flex-col justify-start'>
				{myArticles.map((archive, index) => (
					<ArchiveArticle
						key={index}
						archive={archive}
						imageSrc={imageSrcs[index % 4]}
					/>
				))}
			</div>
		</>
	)
}
