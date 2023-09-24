import getCurrentUser from './actions/getCurrentUser'
import Confetti from './components/Confetti'
import DailyTasks from './components/DailyTasks'
import WordCard from './components/WordCard'
import HomeWordList from './components/HomeWordList'
import WordMemoryCard from './components/WordMemoryCard'
import HomeExcerptList from './components/HomeExcerptList'

export const dynamic = 'force-dynamic'

export default async function Home() {
	const currentUser = await getCurrentUser()

	return (
		<>
			<Confetti />
			<div className='flex  flex-col items-center justify-between'>
				<div className='mb-4 lg:max-w-5xl w-full '>
					<DailyTasks currentUser={currentUser} />
				</div>

				<HomeWordList />

				<HomeExcerptList />
			</div>
		</>
	)
}
