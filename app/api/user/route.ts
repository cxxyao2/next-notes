import { bcryptPasswordHash } from '@/app/lib/bcryptHandlers'
import db from '@/app/lib/prismadb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	try {
		const users = await db.user.findMany()

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
	try {
		const { email, name, password, role } = await request.json()

		// check if email already exists
		const existingUserByEmail = await db.user.findUnique({
			where: { email }
		})
		if (existingUserByEmail) {
			return NextResponse.json(
				{ user: null, message: 'Email already exists' },
				{ status: 409 }
			)
		}

		// check if username already exists
		const existingUserByUsername = await db.user.findUnique({
			where: { email }
		})
		if (existingUserByUsername) {
			return NextResponse.json(
				{ user: null, message: 'Username already exists' },
				{ status: 409 }
			)
		}

		const hashedPassword = await bcryptPasswordHash(password)
		const newUser = await db.user.create({
			data: {
				email,
				name,
				hashedPassword,
				role
			}
		})

		return NextResponse.json(
			{
				user: { name: newUser.name, email: newUser.email },
				message: 'User created successfully'
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
