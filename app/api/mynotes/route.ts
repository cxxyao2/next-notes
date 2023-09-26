import db from '@/app/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams
		const userId = searchParams.get('userId')
		const startDate = searchParams.get('startDate')
		const endDate = searchParams.get('endDate')
		const keywords = searchParams.get('keywords')

		let query: any = {}

		if (userId) {
			query.userId = userId
		}

		if (keywords) {
			query.keywords = { mode: 'insensitive', contains: keywords }
		}

		if (startDate && endDate) {
			query.occurredAt = { gte: startDate, lte: endDate }
		}

		const notes = await db.mynote.findMany({
			where: query,
			orderBy: {
				occurredAt: 'desc'
			}
		})

		return NextResponse.json(
			{
				notes: notes.map((note) => ({
					...note,
					occurredAt: new Date(note.occurredAt).toLocaleDateString(),
					createdAt: new Date(note.createdAt).toLocaleDateString(),
					updatedAt: new Date(note.updatedAt).toLocaleDateString()
				})),
				message: 'Notes Get successfully'
			},
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ notes: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}

export async function POST(request: NextRequest) {
	try {
		const { keywords, language, category, content, occurredAt, tags, userId } =
			await request.json()

		const newNote = await db.mynote.create({
			data: {
				keywords,
				language,
				category,
				content,
				occurredAt,
				tags,
				userId
			}
		})

		return NextResponse.json(
			{
				note: newNote,
				message: 'Note created successfully'
			},
			{ status: 201 }
		)
	} catch (error) {
		console.error('error note server', error)
		return NextResponse.json(
			{ note: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}
