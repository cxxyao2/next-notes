'use client'

import Select from 'react-select'
import React, { useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'

import { useForm, Controller, FieldValues } from 'react-hook-form'
import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from 'rehype-sanitize'
import Input from '../components/Input'
import { Tag } from '@prisma/client'
import Checkbox from '../components/Checkbox'
import RadioGroup from '../components/RadioGroup'

type Props = {
	allTags: Tag[] | undefined | null
}

export default function CreateNote({ allTags }: Props) {
	const [isLoading, setIsLoading] = useState(false)

	const {
		control,
		register,
		setValue,
		watch,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			category: 'word',
			keywords: 'library company',
			content: '',
			language: 'en',
			tags: [],
			occurredAt: new Date()
		}
	})

	const keywords = watch('keywords')
	const content = watch('content')
	const language = watch('language')
	const category = watch('category')
	const tags = watch('tags')
	const occurredAt = watch('occurredAt')

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true
		})
	}

	const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
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

	const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		try {
			const updatedId = 3
			const response = await axios.put(`/api/mynotes/${updatedId}`, {
				keywords,
				content,
				language,
				category,
				tags,
				occurredAt: occurredAt.toISOString()
			})
			console.log('Record update:', response.data)
		} catch (error) {
			console.error('Error updating a new record:', error)
		}
	}

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		try {
			const response = await axios.post('/api/mynotes', {
				keywords,
				content,
				language,
				category,
				tags,
				occurredAt: new Date().toISOString()
			})
			console.log('Record created:', response.data)
		} catch (error) {
			console.error('Error creating a new record:', error)
		}
	}

	return (
		<div className='flex flex-col gap-4'>
			<label className='text-2xl font-semibold text-blue-600 dark:text-blue-200'>
				Craft your note
			</label>
			<RadioGroup
				selectedValue={language}
				handleRadioChange={(e) => {
					e.preventDefault()
					setCustomValue('language', e.target.value)
				}}
			/>
			<p className='text-md font-semibold mt-8'>Category</p>
			<Controller
				name='category'
				control={control}
				render={({ field }) => (
					<Select
						{...field}
						options={[
							{ value: 'word', label: 'word' },
							{ value: 'topic', label: 'topic' },
							{ value: 'diary', label: 'diary' }
						]}
					/>
				)}
			/>

			{allTags?.map((tag) => (
				<Checkbox
					key={tag.id}
					boxLabel={tag.name}
					isChecked={tags.include(tag.id)}
					toggleCheckbox={() => {
						const selectedTags: string[] = [...tags]
						const index = selectedTags.findIndex((id) => id === tag.id)
						if (index > -1) {
							selectedTags.splice(index, 1)
						} else {
							selectedTags.push(tag.id)
						}
						setCustomValue('tags', selectedTags)
					}}
				/>
			))}

			<div className='flex flex-col'>
			<DatePicker
				selected={occurredAt}
				onChange={(date) => setCustomValue('occurredAt', date)}
				showTimeSelect
				dateFormat='MMMM d, yyyy h:mm aa'
				/>
				</div>

			{/* <Input
				id='keywords'
				label='keywords'
				disabled={isLoading}
				type='text'
				register={register}
				required
			/> */}
			<div className='flex flex-col'>
				<label htmlFor='content' className='text-md'>
					Content:
				</label>
				<MDEditor
					value={content}
					onChange={(value) => setCustomValue('content', value)}
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
		</div>
	)
}
