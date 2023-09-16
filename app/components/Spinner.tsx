'use client'

import React, { useState, useEffect } from 'react'

type Props = {}

export default function Spinner({}: Props) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return <div>Spinner</div>
}
