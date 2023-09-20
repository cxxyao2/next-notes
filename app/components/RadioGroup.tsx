import React from 'react'

type Props = {
  selectedValue: string,
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const radioOptions = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' }
]

export default function RadioGroup({selectedValue,handleRadioChange}: Props) {
  return (
		<div className='flex flex-col gap-4'>
				<p className='text-md font-semibold'>Language</p>
			{radioOptions.map((option) => (
				<div key={option.value}>
					<input
						type='radio'
						id={option.value}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={handleRadioChange}
					/>
					<label htmlFor={option.value}>{option.label}</label>
				</div>
			))}

		</div>
	)
}