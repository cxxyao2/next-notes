'use client'

import React, { useEffect,useState } from 'react'

type Props = {}

export default function Footer({}: Props) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return <div >Footer</div>
}
