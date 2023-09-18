import Confetti from './components/Confetti'
import DailyTasks from './components/DailyTasks'
import WordCard from './components/WordCard'
import WordCardSkeleton from './components/WordCardSkeleton'

export default function Home() {
	return (
		<>
			<Confetti />
			<div className='flex  flex-col items-center justify-between'>
				<div className='mb-4 lg:max-w-5xl w-full  '>
					<div className='relative left-0 top-0 flex flex-col w-full justify-center border-b space-y-4 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
						<DailyTasks />
						<div>4
							<div></div>
						</div>
						<div>avatar image</div>
						<div>username </div>
					</div>
				</div>

				<div className='mb-4 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left'>
					{[1, 2, 3].map((item) => (
						<WordCard key={item} />
					))}
							{[1, 2].map((item) => (
						<WordCardSkeleton key={item} imageName='/images/a4.webp' />
					))}
					{[4, 5].map((item) => (
						<WordCardSkeleton key={item} imageName='/images/a3.webp' />
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
								someone is learning IT skills by watching videos and reading
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
