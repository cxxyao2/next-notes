import prisma from '@/app/lib/prismadb'
import getCurrentUser from './getCurrentUser'

export default async function getAllNewWords() {
	try {
		const user = await getCurrentUser()

		if (!user?.id) {
			return null
		}

		const notes = await prisma.mynote.findMany({
			where: {
				category:'word',
				userId: user.id,
				memoized:false
			}
		})

		if (!notes) {
			return null
		}

		// todo: if datetime need to be converted into string or not
		return {
			notes: notes.map((note) => ({
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
