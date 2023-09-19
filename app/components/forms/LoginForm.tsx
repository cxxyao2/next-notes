'use client'

import React from 'react'

type Props = {}

export default function LoginForm({ }: Props)
{
	const handleCommit = () =>
	{
		console.log('handleCommit')
	}

	const handleGithubLogin = () =>
	{
		console.log('handleGithubLogin')
	}

	return (
		<div className='flex flex-col'>
			<div>Login</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email' />
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' />
			</div>
			<div>
				<button type='submit' onClick={handleCommit}>
					Login
				</button>
			</div>

			<div className='flex items-center py-4'>
				<div className='flex-grow h-px bg-gray-400'></div>

				<span className='flex-shrink text-gray-500 px-4 italic font-light'>
					OR
				</span>

				<div className='flex-grow h-px bg-gray-400'></div>
			</div>
			<div>
				<button type='button' onClick={handleGithubLogin}>
					GITHUB
				</button>
			</div>
		</div>

	)

}