'use client'

import Select from 'react-select'
import React, { useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import { useRouter } from 'next/navigation'

import {
	useForm,
	Controller,
	FieldValues,
	SubmitHandler
} from 'react-hook-form'
import { toast } from 'react-hot-toast'
import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from 'rehype-sanitize'

import { Tag } from '@prisma/client'
import Checkbox from '../components/Checkbox'
import RadioGroup from '../components/RadioGroup'
import InputNoHook from '../components/InputNoHook'
import Button from '../components/Button'
import { SafeUser } from '../types'

import useLoader from '../hooks/useLoader'
import { CATEGORIES } from '../data/consts'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
	keywords: z.string().min(3, 'Keywords must be at least 3 character').max(100),
	content: z.string().min(8, 'Content must be at least 8 characters')
})

type Props = {
	allTags: Tag[] | undefined | null
	currentUser: SafeUser | null | undefined
}

export default function CreateNote({ allTags, currentUser }: Props) {
	const { isLoading, onClose, onOpen } = useLoader()
	const router = useRouter()

	const {
		control,
		setValue,
		watch,
		formState: { errors },
		reset,
		handleSubmit
	} = useForm<FieldValues>({
		defaultValues: {
			category: { label: 'word', value: 'word' },
			keywords: '',
			content: '',
			language: 'en',
			tags: [],
			occurredAt: new Date()
		},
		resolver: zodResolver(schema)
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
				category: category.value,
				tags,
				occurredAt,
				userId: currentUser?.id
			})
		} catch (error) {
			console.error('Error updating a new record:', error)
		}
	}

	const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
		onOpen()
		try {
			const response = await axios.post('/api/mynotes', {
				keywords,
				content,
				language,
				category: category.value,
				tags,
				occurredAt,
				userId: currentUser?.id
			})
			onClose()
			toast.success('Saved successfully')
			reset()
		} catch (error) {
			onClose()
			toast.error('Failed' + JSON.stringify(error))
		}
	}

	if (!allTags || allTags.length === 0) return null

	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
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
			<p className='text-md font-semibold'>Category</p>
			<Controller
				name='category'
				control={control}
				render={({ field }) => (
					<Select
						{...field}
						options={CATEGORIES.map((item) => ({
							value: item,
							label: item
						}))}
						classNames={{
							option: () => 'dark:text-black'
						}}
						theme={(theme) => ({
							...theme,
							borderRadius: 6,
							colors: {
								...theme.colors
							}
						})}
					/>
				)}
			/>

			<div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
				<p className='text-md font-semibold col-start-1 col-span-2 lg:col-span-3'>
					Tags
				</p>

				{allTags?.map((tag) => (
					<Checkbox
						key={tag.id}
						boxLabel={tag.name}
						isChecked={tags?.includes(tag.id)}
						toggleCheckbox={(e) => {
							e.stopPropagation()
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
			</div>

			<div className='flex flex-col my-6  p-2'>
				<p className='text-md font-semibold mb-4'>Occurred At:</p>
				<DatePicker
					className='border-2 border-neutral-600 dark:border-neutral-200 rounded-lg p-2 pr-6'
					selected={occurredAt}
					onChange={(date) => setCustomValue('occurredAt', date)}
					showTimeSelect
					dateFormat='MMMM d, yyyy h:mm aa'
				/>
			</div>

			<InputNoHook
				id='keywords'
				label='keywords'
				disabled={isLoading}
				type='text'
				value={keywords}
				placeholder='Enter keywords'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setCustomValue('keywords', e.target.value)
				}
				required
			/>
			{errors.keywords && (
				<p className='text-rose-600'>{errors.keywords.message?.toString()}</p>
			)}

			<div className='flex flex-col'>
				<label htmlFor='content' className='text-md mb-6 font-semibold'>
					Content:
				</label>
				{errors.content && (
					<p className='text-rose-600'>{errors.content.message?.toString()}</p>
				)}
				<MDEditor
					value={content}
					onChange={(value) => setCustomValue('content', value)}
					preview={'edit'}
					previewOptions={{
						rehypePlugins: [[rehypeSanitize]]
					}}
				/>
			</div>
			<div className='flex justify-between gap-4'>
				<Button
					label='Cancel'
					type='button'
					outline
					disabled={isLoading}
					onClick={() => router.push('/')}
				/>
				<Button label='Post' type='submit' disabled={isLoading} />
			</div>
			{/* <button type='submit' onClick={handleSubmit}>
				Submit
			</button> */}
			{/* <button type='button' onClick={handleDelete}>
				delete 1
			</button>
			<button type='button' onClick={handleUpdate}>
				update 2
			</button> */}
		</form>
	)
}
