import { getServerSession } from 'next-auth/next'

import prisma from '@/app/lib/prismadb'
import { authOptions } from '../lib/auth'

export async function getSession() {
	return await getServerSession(authOptions)
}

export default async function getAllTags() {
	try {
		const session = await getSession()

		if (!session?.user?.email) {
			return null
		}

		const tags = await prisma.tag.findMany()

		if (!tags) {
			return null
		}

		return {
			tags
		}
	} catch (error: any) {
		return null
	}
}
