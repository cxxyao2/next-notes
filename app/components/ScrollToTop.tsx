'use client'

import React, { useEffect, useState } from 'react'
import { BsChevronUp } from 'react-icons/bs'

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false)
	const [mounted, setMounted] = useState(false)



	const toggleVisible = () => {
		const scrolled =
			document.documentElement.scrollTop || document.body.scrollTop
		console.log('scrooled', scrolled)
		if (scrolled > 100) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible)
		return () => {
			window.removeEventListener('scroll', toggleVisible)
		}
	})

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!visible || !mounted) return null

	return (
		<button
			type='button'
			aria-label='Scroll to top'
			className='fixed right-8 top-[90%] p-1 bg-white border border-gray-300 duration-200 transition-all'
			onClick={scrollToTop}>
			<BsChevronUp className='w-4 h-4 text-indigo-400' />
		</button>
	)
}

export default ScrollToTop
