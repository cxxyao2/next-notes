'use client'


interface InputProps {
	id: string
	label: string
	type?: string
	disabled?: boolean
	required?: boolean
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
}

export default function InputNoHook({
	id,
	label,
	type = 'text',
	disabled = false,
	required,
	value,
	onChange,
	placeholder = ''
}: InputProps) {
	return (
		<div className='w-full flex flex-col-reverse'>
			<input
				type={type}
				id={id}
				disabled={disabled}
				placeholder={placeholder}
				required={required}
				value={value}
				onChange={onChange}
				className='w-full p-4 border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed pl-4 border-gray-400 focus:border-black'
			/>
			<label
				htmlFor={id}
				className='text-md font-semibold  dark:text-white mb-6'>
				{label}
			</label>
		</div>
	)
}
