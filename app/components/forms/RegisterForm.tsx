'use client'

import React from 'react'

type Props = {}

export default function RegisterForm({}: Props) {
	const handleCommit = () => {
		console.log('handleCommit')
	}

	const handleGithubLogin = () => {
		console.log('handleGithubLogin')
	}

	return (
		<div className='flex flex-col'>
			<div>Register</div>
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


		</div>
	)
}
