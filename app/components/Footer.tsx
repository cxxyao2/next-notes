'use client'

import React, { useState } from 'react'

type Props = {}

export default function Footer({ }: Props)
{
  	const [mounted, setMounted] = useState(false)

  	if (!mounted) return null

  return (
    <div>Footer</div>
  )
}