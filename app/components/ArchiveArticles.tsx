'use client'

import React, { useEffect } from 'react'
import ArchiveArticle from './ArchiveArticle'

import useArticles from '../hooks/useArticles'

type Props = {}

export default function ArchiveArticles({}: Props) {
	const imageSrcs = [
		'/images/a3.webp',
		'/images/a4.webp',
		'/images/a5.jpg',
		'/images/a6.jpg'
	]

	const articlesHook = useArticles()
	const myarticles = articlesHook.articles

	useEffect(() => {
		fetch('/api/mynotes', { cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => {
				console.log('new articles,', data)
			})
	}, [])

	return (
		<>
			<div className='flex flex-col justify-start'>
				{myarticles.map((archive, index) => (
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
