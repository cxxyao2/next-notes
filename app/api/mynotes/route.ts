import { bcryptPasswordHash } from '@/app/lib/bcryptHandlers'
import db from '@/app/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const users = await db.mynote.findMany()

		return NextResponse.json(
			{
				users,
				message: 'User Get successfully'
			},
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ user: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}

export async function POST(request: NextRequest) {
	// todo: get current user id

	try {
		const { language, category, content, occurredAt, tags } =
			await request.json()

		const newNote = await db.mynote.create({
			data: {
				language,
				category,
				content,
				occurredAt,
				tags,
				userId: 3
			}
		})

		return NextResponse.json(
			{
				user: newNote,
				message: 'Note created successfully'
			},
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json(
			{ user: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}
