'use client'

import React, { useEffect, useState } from 'react'
import ArchiveArticles from '../components/ArchiveArticles'
import ArchiveTable from '../components/ArchiveTable'

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
			<ul role='tablist' className='flex justify-center space-x-4 p-2'>
				<li
					className={` px-4 py-2 border-2 ${
						activeTab === 0 ? 'border-rose-400' : 'border-gray-200'
					} rounded-lg `}
					role='tab'
					aria-selected={activeTab === 0}
					onClick={() => handleTabClick(0)}>
					Articles
				</li>
				<li
					className={`px-4 py-2 border-2  ${
						activeTab === 1 ? 'border-rose-400' : 'border-gray-200'
					} rounded-lg `}
					role='tab'
					aria-selected={activeTab === 1}
					onClick={() => handleTabClick(1)}>
					Statistics
				</li>
			</ul>

<hr className='border-b-2 bg-neutral-400 dark:bg-neutral-200 my-6'  />

			{activeTab === 0 && <ArchiveArticles />}
			{activeTab === 1 && <ArchiveTable />}
		</div>
	)
}

export default ArchiveTabPanel
