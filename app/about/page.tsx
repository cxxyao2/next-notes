import SocialIcon from '../components/social-icons'
import Image from 'next/image'
import content from '../data/siteMetadata'

const bioItems = [
	{
		index: 0,
		content:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		index: 1,
		content:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		index: 2,
		content:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}
]

export default function AuthorLayout() {
	const {
		name,
		avatar,
		occupation,
		company,
		email,
		twitter,
		linkedin,
		github
	} = content

	return (
		<>
			<div className='divide-y divide-gray-200 dark:divide-gray-700'>
				<div className='space-y-2 pb-8 pt-6 md:space-y-5'>
					<h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
						About
					</h1>
				</div>
				<div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
					<div className='flex flex-col items-center space-x-2 pt-8'>
						{avatar && (
							<Image
								src={avatar}
								alt='avatar'
								width={192}
								height={192}
								className='h-48 w-48 rounded-full'
							/>
						)}
						<h3 className='pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight'>
							{name}
						</h3>
						<div className='text-gray-500 dark:text-gray-400'>{occupation}</div>
						<div className='text-gray-500 dark:text-gray-400'>{company}</div>
						<div className='flex space-x-3 pt-6'>
							<SocialIcon kind='mail' href={`mailto:${email}`} size={6} />
							<SocialIcon kind='github' href={github} size={6} />
							<SocialIcon kind='linkedin' href={linkedin} size={6} />
							<SocialIcon kind='twitter' href={twitter}  size={6} />
						</div>
					</div>
					<div className=' max-w-none pb-8 pt-8  xl:col-span-2'>
						{bioItems.map((bio) => (
							<p key={bio.index} className='mb-6'>
								{bio.content}
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
