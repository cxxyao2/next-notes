'use client'

import React, { useState } from 'react'
import axios from 'axios'
import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from 'rehype-sanitize'

type Props = {}

export default function CreateNote({}: Props) {
	const [content, setContent] = useState<string | undefined>('Hello world')

	const handleDelete = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			// Replace 'http://localhost:3000/api/createRecord' with the correct API route.
			const deletedId = 1
			const response = await axios.delete(`/api/mynotes/${deletedId}`)
			console.log('Record deleted:', response.data)
		} catch (error) {
			console.error('Error deleting a new record:', error)
		}
	}

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const updatedId = 3
			const response = await axios.put(`/api/mynotes/${updatedId}`, {
				content,
				language: 'en',
				category: 'word',
				tags: [1, 2, 3],
				occurredAt: new Date().toISOString()
			})
			console.log('Record update:', response.data)
		} catch (error) {
			console.error('Error updating a new record:', error)
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const response = await axios.post('/api/mynotes', {
				content,
				language: 'en',
				category: 'word',
				tags: [1, 2],
				occurredAt: new Date().toISOString()
			})
			console.log('Record created:', response.data)
		} catch (error) {
			console.error('Error creating a new record:', error)
		}
	}

	return (
		<div>
			{/* todo. add MarkEdiot */}
			<form className='flex flex-col divide-y-4'>
				<div className='flex flex-col'>
					<label htmlFor='keywords'>keywords</label>
					<input type='text' id='keywords' name='keywords' />
				</div>
				<div className='flex flex-col'>
					<label htmlFor='content'>Content: </label>
					<MDEditor
						value={content}
						onChange={setContent}
						preview={'edit'}
						previewOptions={{
							rehypePlugins: [[rehypeSanitize]]
						}}
					/>
				</div>
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
				<button type='button' onClick={handleDelete}>
					delete 1
				</button>
				<button type='button' onClick={handleUpdate}>
					update 2
				</button>
			</form>
		</div>
	)
}
