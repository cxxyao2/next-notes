'use client'

import React from 'react'

type ArchiveStatsItem = {
	month: string
	words: number
	articles: number
	diaries: number
}

export default function ArchiveTable() {
	const completedDays = 200 //todo

	const objTemplate = {
		month: 'Septemper 2023',
		words: 12,
		articles: 12,
		diaries: 1
	}
	const archiveStats: ArchiveStatsItem[] = Array(24).fill(objTemplate)

	return (
		<div className='h-[65vh] overflow-hidden'>
			<div className=' border-b-rose-400'>
				You completed all your daily tasks for{' '}
				<span className='inline-block font-semibold text-rose-400 text-2xl -skew-y-6 '>
					{completedDays}
				</span>{' '}
				days out of{' '}
				<span className='inline-block font-semibold text-indigo-400 text-2xl -skew-y-6 '>
					365
				</span>
				.
			</div>
			<div className='mt-4 w-full h-5/6 overflow-auto'>
				<table className='table-fixed min-w-full divide-y divide-gray-200 text-center'>
					<thead className='sticky top-0 bg-gray-100'>
						<tr>
							<th >Month</th> <th>Words</th> <th>Articles</th> <th>Diaries</th>
						</tr>
					</thead>
					<tbody>
						{archiveStats.map((item, index) => (
							<tr
								key={index}
								className='bg-white even:bg-gray-100 p-2 '>
								<td className='p-2 text-left'>{item.month}</td>
								<td className='p-2'>{item.words}</td>
								<td className='p-2'>{item.articles}</td>
								<td className='p-2'>{item.diaries}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
