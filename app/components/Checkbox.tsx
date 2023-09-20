'use client'

type Props = {
	boxLabel: string
	isChecked: boolean
	toggleCheckbox: () => void
}

export default function Checkbox({
	boxLabel,
	isChecked,
	toggleCheckbox
}: Props) {
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
