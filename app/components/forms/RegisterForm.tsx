'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Role } from '@prisma/client'

import React from 'react'
import Input from '../Input'
import Button from '../Button'
import Link from 'next/link'

const schema = z
	.object({
		email: z
			.string()
			.email('Invalid email address')
			.min(1, 'Email is required')
			.max(100),
		password: z
			.string()
			.min(1, 'Password is required')
			.min(8, 'Password must be at least 8 characters'),
		confirmPassword: z
			.string()
			.min(1, 'Confirm Password is required')
			.min(8, 'Confirm Password must be at least 8 characters')
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords do not match'
	})

export default function RegisterForm() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: ''
		},
		resolver: zodResolver(schema)
	})

	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		console.log(data)

		setIsLoading(true)

		axios
			.post('/api/user', {
				name: data.email,
				email: data.email,
				password: data.password,
				role: Role.User
			})
			.then((res) => {
				toast.success('Registered successfully')
				setIsLoading(false)
				router.push('/login')
				console.log(res)
			})
			.catch((error) => {
				toast.error(error)
				setIsLoading(false)
			})
	}

	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
			<div className='text-2xl font-semibold text-center'>Register</div>

			<Input
				id='email'
				label='Email'
				type='email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id='password'
				label='Password'
				type='password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id='confirmPassword'
				label='Confirm password'
				type='password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<div className='flex flex-col gap-4 mt-3'>
				<hr />
				<Button outline label='Register' type='submit' />
				<div className='text-center mt-4 font-light'>
					<p>
						Already have an account?
						<Link
							href='/login'
							className='text-blue-500 cursor-pointer hover:underline'>
							Log in
						</Link>
					</p>
				</div>
			</div>
		</form>
	)
}
