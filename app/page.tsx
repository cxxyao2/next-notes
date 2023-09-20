import getCurrentUser from './actions/getCurrentUser'
import Confetti from './components/Confetti'
import DailyTasks from './components/DailyTasks'
import WordCard from './components/WordCard'

export default async function Home()
{
	const currentUser = await getCurrentUser()
	
	return (
		<>
			<Confetti />
			<div className='flex  flex-col items-center justify-between'>
				<div className='mb-4 lg:max-w-5xl w-full '>
					<DailyTasks currentUser={currentUser} />
				</div>

				<div className='mb-4 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
{/* need to make skeleton invisable conditionally */}
					{/* {[1, 2, 3].map((item) => (
						<WordCardSkeleton key={item} imageName='/images/a4.webp' />
					))} */}
					{[1, 2].map((item) => (
						<WordCard key={item} imageName='/images/a4.webp' />
					))}
					{[4, 5].map((item) => (
						<WordCard key={item} imageName='/images/a3.webp' />
					))}
					{[1, 2, 3].map((item) => (
						<a
							key={item}
							href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
							className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
							target='_blank'
							rel='noopener noreferrer'>
							<h2 className={`mb-3 text-2xl font-semibold`}>
								Docs {item}{' '}
								<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
									-&gt;
								</span>
							</h2>
							<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
								Someone is learning IT skills by watching videos and reading
								books and keep practice
							</p>
						</a>
					))}
				</div>

				<div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left'>
					{[1, 2].map((item) => (
						<a
							key={item}
							href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
							className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
							target='_blank'
							rel='noopener noreferrer'>
							<h2 className={`mb-3 text-2xl font-semibold`}>
								Docs {item}{' '}
								<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
									-&gt;
								</span>
							</h2>
							<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
								someone is learning IT skills by watching videos and reading
								books and keep practice
							</p>
						</a>
					))}
				</div>
			</div>
		</>
	)
}
