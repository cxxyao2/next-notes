import { bcryptPasswordHash } from '@/app/lib/bcryptHandlers'
import db from '@/app/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const checks = await db.checkhistory.findMany()

		return NextResponse.json(
			{
				checks,
				message: 'Check histories Get successfully'
			},
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ checks: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}

export async function POST(request: NextRequest) {
	try {
		const { ip, userId } = await request.json()

		const newHistory = await db.checkhistory.create({
			data: {
				ip,
				userId
			}
		})

		return NextResponse.json(
			{
				history: newHistory,
				message: 'Check history created successfully'
			},
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json(
			{ history: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}
