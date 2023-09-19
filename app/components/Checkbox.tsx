'use client'

import React, { useState } from 'react'

type Props = {
	boxLabel: string
}

export default function Checkbox({ boxLabel }: Props) {
	const [isChecked, setIsChecked] = useState(false)

	const toggleCheckbox = () => {
		console.log('toggleCheckbox')
		setIsChecked((state) => !state)
	}

	return (
		<label
			className={`inline-block relative cursor-pointer  ${
				isChecked ? 'checked' : ''
			}`}>
			<input
				type='checkbox'
				checked={isChecked}
				onChange={toggleCheckbox}
				className='hidden'
			/>
			<span
				className={` inline-block w-full h-full p-2 transition-all duration-300 rounded-lg border-2 border-solid border-gray-500 dark:border-gray-200 ${
					isChecked ? 'bg-blue-500 border-blue-500 text-white' : ''
				} `}>
				{boxLabel}
			</span>
		</label>
	)
}
