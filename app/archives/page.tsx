import ArchiveTabPanel from './ArchiveTabPanel'
import getAllArticles from '../actions/getAllArticles'

export const dynamic = 'force-dynamic'

const page = async () => {
	const data = await getAllArticles()
	return <ArchiveTabPanel myArticles={data?.articles} />
}

export default page
