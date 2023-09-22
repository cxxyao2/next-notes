import { getServerSession } from 'next-auth/next'

import prisma from '@/app/lib/prismadb'
import { authOptions } from '../lib/auth'

export async function getSession() {
	return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
	try {
		const session = await getSession()

		if (!session?.user?.email) {
			return null
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email as string
			},
			include: {
				mynotes: true
			}
		})

		if (!currentUser) {
			return null
		}

		return {
			...currentUser,
			createdAt: currentUser.createdAt.toISOString(),
			updatedAt: currentUser.updatedAt.toISOString(),
			emailVerified: currentUser.emailVerified?.toISOString() || null,
			mynotes: currentUser.mynotes.map((note) => ({
				...note,
				occurredAt: note.occurredAt.toISOString(),
				createdAt: note.createdAt.toISOString(),
				updatedAt: note.updatedAt.toISOString()
			}))
		}
	} catch (error: any) {
		throw new Error(error)
	}
}
