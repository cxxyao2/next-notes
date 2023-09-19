// update, delete by noteID
import { NextRequest, NextResponse } from 'next/server'

import getCurrentUser from '@/app/actions/getCurrentUser'
import prisma from '@/app/lib/prismadb'

interface IParams {
	userId?: string
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: IParams }
) {
	try {
		// const currentUser = await getCurrentUser()
    const currentUser = {id:0}

    // if user role is 'Admin' and  currentUser.id !== params.id
		if (!currentUser) return NextResponse.error()

		const { userId } = params
		if (!userId ) throw new Error('Invalid ID')




		const deletedNote = await prisma.user.deleteMany({
			where: {
				id:userId
			}
		})

		return NextResponse.json({
			message: 'Note deleted successfully'
		})
	} catch (error) {
		console.log('error is ', error)
		return NextResponse.json(
			{ deletedUser: null, message: 'Something went wrong' },
			{ status: 500 }
		)
	}
}
