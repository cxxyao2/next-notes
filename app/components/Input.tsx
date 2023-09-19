'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
	id: string
	label: string
	type?: string
	disabled?: boolean
	required?: boolean
	register: UseFormRegister<FieldValues>
	errors: FieldErrors
	placeholder?: string
}

export default function Input({
	id,
	label,
	type = 'text',
	disabled = false,
	required,
	register,
	errors,
	placeholder = ''
}: InputProps) {
	return (
		<div className='w-full flex flex-col-reverse'>
			{errors[id] && (
				<p role='alert' className='text-rose-500'>
					{errors[id]?.message?.toString()}
				</p>
			)}
			<input
				type={type}
				id={id}
				disabled={disabled}
				placeholder={placeholder}
				aria-invalid={errors[id] ? 'true' : 'false'}
				{...register(id, { required })}
				className={`w-full p-4 border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed pl-4  ${
					errors[id] ? 'border-rose-500' : 'border-neutral-400'
				}   ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'} `}
			/>
			<label
				htmlFor={id}
				className={`text-md ${
					errors[id] ? 'text-rose-500' : 'text-zinc-600 dark:text-white'
				}`}>
				{label}
			</label>
		</div>
	)
}
