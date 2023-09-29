import { redirect } from 'next/navigation'
import getAllTags from '../actions/getAllTags'
import getCurrentUser from '../actions/getCurrentUser'
import ClientOnly from '../components/ClientOnly'
import CreateNote from './CreateNote'

export const dynamic = 'force-dynamic'

export default async function Page() {
	const data = await getAllTags()
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		redirect('/login?redirectUrl=/note')
	}

	return (
		<ClientOnly>
			<CreateNote allTags={data?.tags} currentUser={currentUser} />
		</ClientOnly>
	)
}
