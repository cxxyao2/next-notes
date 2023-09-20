import getAllTags from '../actions/getAllTags'
import ClientOnly from '../components/ClientOnly'
import CreateNote from './CreateNote'

export default async function Page() {
	const tags = await getAllTags()

	console.log('server side tags:', tags)

	return (
		<ClientOnly>
			<CreateNote allTags={tags} />
		</ClientOnly>
	)
}
