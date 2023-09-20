'use client'
import { name } from './../../.next/server/app/search/page'

type Props = {
	boxLabel: string
	isChecked: boolean
	toggleCheckbox: (e:any) => void
}

export default function Checkbox({
	boxLabel,
	isChecked,
	toggleCheckbox
}: Props) {
	return (
		<div className='flex'>
			<label
				htmlFor={boxLabel}
				className={` inline-block w-full h-full p-2 transition-all duration-300 rounded-lg border-2 border-solid border-neutral-400 bg-neutral-200 text-black ${
					isChecked ? '!bg-blue-600 !border-blue-200 text-white' : ''
				} `}>
				{boxLabel}
					<input
				id={boxLabel}
				name={boxLabel}
				type='checkbox'
				checked={isChecked}
				onChange={toggleCheckbox}
				className='  ml-4'
			/>
			</label>
		</div>
	)
}
