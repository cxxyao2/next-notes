'use client'

import React, { useState, useEffect } from 'react'
import { WORDPLACEHOLDERS } from '../data/consts'
import WordCard from './WordCard'

type Props = {}

export default function HomeWordList({}: Props) {
	const [mounted, setMounted] = useState(false)
	const placeholders = WORDPLACEHOLDERS

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<div className='mb-4w-full   grid grid-col-1 gap-4 text-center md:mx-auto lg:max-w-5xl  lg:mb-0 md:grid-cols-2 lg:grid-cols-3 lg:text-left'>
			{placeholders.map((item,index) => (
				<WordCard key={index} title={item.title} category={item.industry} imgSrc={`/images/${item.industry}.jpg`} />
			))}
		</div>
	)
}
