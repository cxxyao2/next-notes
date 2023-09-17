'use client'

import React, { useState, useEffect } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import useConfetti from '../hooks/useConfetti'

export default function MyConfetti() {
	const [hasMounted, setHasMounted] = useState(false)
	const confetti = useConfetti()

	useEffect(() => {
		setHasMounted(true)
	}, [])

	const { width, height } = useWindowSize()

	// todo , need to add isConfettiOpen to the store
	if (!hasMounted || !confetti.isOpen) return null
  return ( <div className='fixed top-0 left-0 w-[100wh] h-[100vh] z-[100]'>
    <Confetti width={width} height={height} />
  </div>)
}
