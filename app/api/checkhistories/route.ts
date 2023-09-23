import { bcryptPasswordHash } from '@/app/lib/bcryptHandlers'
import db from '@/app/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { Role } from '@prisma/client'

export async function GET(request: NextRequest)
{
	// todo: if user role is admin, return all check histories
	// else return only user's check histories

	try
	{
			const currentUser = await getCurrentUser()

		if (!currentUser) return NextResponse.error()

		let checks;
		if (currentUser.role === Role.Admin)
		{

			checks = await db.checkhistory.findMany({
				 take:10
			 })
		}
		else
		{
			 checks = await db.checkhistory.findMany({
				where: {
					userId: currentUser.id
				 },
				 take:10
			})
		}

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
