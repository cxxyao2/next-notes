'use client'

import Image from 'next/image'
import React from 'react'
import ArchiveArticle from './ArchiveArticle'

type Props = {}

export default function ArchiveArticles({}: Props) {
	const imageSrcs = [
		'/images/a3.webp',
		'/images/a4.webp',
		'/images/a5.jpg',
		'/images/a6.jpg'
	]
	return (
		<>
			<div>ArchiveArticles</div>
			<div className='flex flex-col justify-start'>
				{imageSrcs.map((imageSrc, index) => (
					<ArchiveArticle key={index} imageSrc={imageSrc} />
				))}
			</div>
		</>
	)
}
