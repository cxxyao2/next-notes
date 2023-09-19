'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Role } from '@prisma/client'
import { AiFillGithub } from 'react-icons/ai'

import React from 'react'
import Input from '../Input'
import Button from '../Button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const schema = z.object({
	email: z
		.string()
		.email('Invalid email address')
		.min(1, 'Email is required')
		.max(100),
	password: z
		.string()
		.min(1, 'Password is required')
		.min(8, 'Password must be at least 8 characters')
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
			password: ''
		},
		resolver: zodResolver(schema)
	})

	const signInWithParams = (provider: string, data?: Record<string, any>) => {
		setIsLoading(true)

		signIn(provider, { ...data, redirect: false })
			.then((callback: any) => {
				if (callback?.ok) {
					setIsLoading(false)
					toast.success('Logged in successfully')
					router.push('/')
				}

				if (callback?.error) {
					toast.error(callback?.error?.message)
				}
			})
			.catch((err) => {
				toast.error(err)
			})
	}

	const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
		signInWithParams('credentials', data)
	}

	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
			<div className='text-2xl font-semibold text-center'>Login</div>

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
			<div className='flex flex-col gap-4 mt-3'>
				<hr />
				<Button outline label='Login' type='submit' />
				<Button
					outline
					label='Continue with Github'
					type='button'
					icon={AiFillGithub}
					onClick={() => signIn('github',{callbackUrl:'/'})}
				/>
				<div className='text-center mt-4 font-light'>
					<p>
						First time using Polyglot-Notes?
						<Link
							href='/register'
							className='text-blue-500 cursor-pointer hover:underline'>
							Create an account
						</Link>
					</p>
				</div>
			</div>
		</form>
	)
}
