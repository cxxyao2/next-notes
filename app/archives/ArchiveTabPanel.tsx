'use client'

import React, { useEffect, useState } from 'react'
import ArchiveArticles from '../components/ArchiveArticles'
import ArchiveTable from '../components/ArchiveTable'
import { type } from './../types/index';

const ArchiveTabPanel: React.FC = () => {
	const [activeTab, setActiveTab] = useState(0)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleTabClick = (index: number) => {
		setActiveTab(index)
	}

	if (!mounted) return null

	return (
		<div>
			<div role='tablist' className='flex justify-center space-x-4 p-2'>
				<button
					type='button'
					className='inline-block px-4 py-2 border-2  rounded-lg focus:outline focus:outline-rose-500  hover:bg-neutral-200 dark:hover:bg-neutral-700'
					role='tab'
					aria-selected={activeTab === 0}
					onClick={() => handleTabClick(0)}
					onFocus={() => handleTabClick(0)}>
					Articles
				</button>
				<button
					type='button'
					className='inline-block px-4 py-2 border-2  rounded-lg focus:outline focus:outline-rose-500  hover:bg-neutral-200 dark:hover:bg-neutral-700 '
					role='tab'
					aria-selected={activeTab === 1}
					onClick={() => handleTabClick(1)}
					onFocus={() => handleTabClick(1)}>
					Statistics
				</button>
			</div>

			<hr className='border-b-2 bg-neutral-400 dark:bg-neutral-200 my-6' />

			{activeTab === 0 && <ArchiveArticles />}
			{activeTab === 1 && <ArchiveTable />}
		</div>
	)
}

export default ArchiveTabPanel
