import { bcryptPasswordHash } from '@/app/lib/bcryptHandlers'
import db from '@/app/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const tags = await db.tag.findMany()

		return NextResponse.json(
			{
				tags,
				message: 'Tag Get successfully'
			},
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ tags: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}

export async function POST(request: NextRequest) {
	// todo: get current user id

	try {
		const { name } = await request.json()

		const newTag = await db.tag.create({
			data: {
				name
			}
		})

		return NextResponse.json(
			{
				tag: newTag,
				message: 'Tag created successfully'
			},
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json(
			{ tag: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}
