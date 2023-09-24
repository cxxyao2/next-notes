import getCurrentUser from '@/app/actions/getCurrentUser'
import getNoteById from '@/app/actions/getNoteById'

import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'

import DisplayNote from './DisplayNote'
import { redirect } from 'next/navigation'

interface IParams {
	noteId?: string
}

/* A sample about how to use params in a page */
const NotePage = async ({ params }: { params: IParams }) => {
	const note = await getNoteById(params)
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		redirect('/login')
	}

	if (!note) {
		return (
			<ClientOnly>
				<EmptyState />
			</ClientOnly>
		)
	}

	return (
		<ClientOnly>
			<DisplayNote note={note} />
		</ClientOnly>
	)
}

export default NotePage
