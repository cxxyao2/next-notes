
import db from '@/app/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const notes = await db.mynote.findMany()

		return NextResponse.json(
			{
			notes,
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
		const { keywords, language, category, content, occurredAt, tags,userId } =
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
	} catch (error)
	{
		console.log('error note server',error)
		return NextResponse.json(
			{ note: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}
