// update, delete by noteID
import { NextRequest, NextResponse } from 'next/server'

import getCurrentUser from '@/app/actions/getCurrentUser'
import prisma from '@/app/lib/prismadb'

interface IParams {
	noteId?: string
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: IParams }
) {
	try {
		const currentUser = await getCurrentUser()

		if (!currentUser) return NextResponse.error()

		const { noteId } = params
		if (!noteId ) throw new Error('Invalid ID')



		const currentNote = await prisma.mynote.findUnique({
			where: {
				id:noteId,
				userId: currentUser?.id
			}
		})

		console.log('currentNote', currentNote)

		const deletedNote = await prisma.mynote.deleteMany({
			where: {
				id: noteId,
				userId: currentUser.id
			}
		})

		return NextResponse.json({
			message: 'Note deleted successfully'
		})
	} catch (error) {
		console.log('error is ', error)
		return NextResponse.json(
			{ deletedNote: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}

export async function PUT(request: Request, { params }: { params: IParams }) {
	try {
		const { noteId } = params
		const body = await request.json()
		const { language, category, content, occurredAt, tags } = body

		if (!noteId) throw new Error('Invalid ID')

		const currentUser = await getCurrentUser()
		if (!currentUser) {
			throw new Error('Invalid user')
		}



		const currentNote = await prisma.mynote.findUnique({
			where: {
				id:noteId,
				userId: currentUser?.id
			}
		})

		if (!currentNote) {
			return NextResponse.error()
		}

		const newNote = await prisma?.mynote.update({
			where: {
				id:noteId
			},
			data: {
				language,
				category,
				content,
				occurredAt,
				tags
			}
		})

		return NextResponse.json(newNote)
	} catch (error) {
		console.log('error is ', error)
		return NextResponse.json(
			{ deletedNote: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}
