import prisma from '@/app/lib/prismadb'
import getCurrentUser from './getCurrentUser'

export const dynamic='force-dynamic'

export default async function getAllArticles() {
	try {
		const user = await getCurrentUser()

		if (!user?.id) {
			return null
		}

		const notes = await prisma.mynote.findMany({
			where: {
        category: { not: 'word' },
				userId: user.id
			},
			orderBy:{
				occurredAt:'desc'
			}

		})

		if (!notes) {
			return null
		}


		return {
			articles: notes.map((note) => ({
				...note,
				occurredAt: note.occurredAt.toISOString(),
				createdAt: note.createdAt.toISOString(),
				updatedAt: note.updatedAt.toISOString()
			}))
		}
	} catch (error: any) {
		return null
	}
}
