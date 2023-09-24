import prisma from '@/app/lib/prismadb'
import { to } from './../../.next/static/chunks/main-app'

interface IParams {
	noteId?: string
}

export default async function getNoteById(params: IParams) {
	try {
		const { noteId } = params

		const note = await prisma.mynote.findUnique({
			where: {
				id: noteId
			},
			include: {
				user: true
			}
		})

		if (!note) {
			return null
		}

		return {
			...note,
			createdAt: note.createdAt.toISOString(),
			updatedAt: note.updatedAt.toISOString(),
			occurredAt: note.occurredAt.toISOString()
		}
	} catch (error: any) {
		throw new Error(error)
	}
}
