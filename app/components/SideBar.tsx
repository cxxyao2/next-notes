'use client'

import {
	HomeIcon,
	MagnifyingGlassIcon,
	BookOpenIcon,
	PlusIcon,
	HeartIcon,
	RadioIcon,
	ArrowDownIcon,
	ArrowRightIcon,
	ChevronDownIcon,
	ChartBarIcon,
	ShoppingCartIcon,
	GlobeAltIcon,
	SunIcon,
	UserGroupIcon
} from '@heroicons/react/24/outline'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import useSidebar from '@/app/hooks/useSidebar'
import {AiOutlineClose} from 'react-icons/ai'

const SideBar = () => {
	const { data: session } = useSession()
	const [isExpanded, setIsExpanded] = useState(false)
	const router = useRouter()
	const [userName, setUserName] = useState<string | null | undefined>(null)
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	const sidebarState = useSidebar()

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (session?.user?.name) {
			let currentName = session?.user?.name
			if (currentName) {
				let index = currentName.indexOf('@')
				if (index >= 0) currentName = currentName.slice(0, index)
				currentName =
					currentName.slice(0, 1).toUpperCase() +
					currentName.slice(1).toLowerCase()
				setUserName(currentName)
			}
		}
	}, [session])

	if (!mounted) return null


	return (
		<div >
			{sidebarState.isOpen && (
				<div
					className='fixed inset-0 bg-slate-900 bg-opacity-30 z-30 lg:hidden lg:z-auto transition-opacity duration-200 opacity-100'
					aria-hidden='true'
					onClick={() => sidebarState.onClose()}></div>
			)}
			<div
				className={`absolute z-40 top-0  left-0 bg-white  dark:bg-black dark:text-white text-gray-900 p-5 text-sm
      border-r border-gray-400 w-60 shrink-0 h-screen overflow-y-auto transition-all

       ${
					sidebarState.isOpen ? '!translate-x-0' : ''
				} ease-in-out duration-200 -translate-x-64 `}
				onClick={() => sidebarState.onClose()}>
				<button
					type='button'
					aria-label='Hide Sidebar'
					className='absolute text-2xl text-black  top-4 left-52 lg:hidden hover:bg-neutral-200  px-2  rounded-sm '
					onClick={() => sidebarState.onClose()}>
					<AiOutlineClose className='h-6 w-6   ' />
				</button>
				<div className='space-y-4'>
					<div className='text-center'>{userName}</div>
					{userName && (
						<>
							<button
								onClick={() => {
									localStorage.removeItem('tokenFromServer')
									signOut()
								}}
								className='text-center   w-full rounded-lg p-2 hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white '>
								Sign Out
							</button>
							<hr className='border-t-[0.1px] border-gray-400' />
						</>
					)}
					<button
						className='flex items-center space-x-2 p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white '
						onClick={() => router.push('/')}>
						<HomeIcon className='h-5 w-5 ' />
						<p>Home </p>
					</button>
					<button
						className='flex items-center space-x-2 p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white '
						onClick={() => router.push('/store')}>
						<ShoppingCartIcon className='h-5 w-5 ' />
						<p>Shopping </p>
					</button>
					<div className=''>
						<div
							className='flex justify-between items-center group'
							onClick={(e) => {
								e.preventDefault()
								e.stopPropagation()
								setIsExpanded((prev) => !prev)
							}}>
							<button
								className='flex group-hover:text-indigo-400 group-hover:translation-all group-hover:duration-150'
								onClick={() => router.push('/search')}>
								<MagnifyingGlassIcon className='h-5 w-5 shrink-0 mr-3 ' />
								<div>Search </div>
							</button>

							<ChevronDownIcon
								className={`w-4 h-4 shrink-0 text-gray-800 group-hover:text-indigo-400   translation duration-150 ${
									isExpanded ? 'rotate-180' : ''
								}`}
							/>
						</div>
						{isExpanded && (
							<div>
								<ul className='pl-8 mt-1 '>
									<li className='mb-1 last:mb-0'>
										<button
											onClick={() => router.push('/search')}
											className='block text-left -ml-1 p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white transition duration-150'>
											<span>Product</span>
										</button>
									</li>
									<li>
										<button
											onClick={() => router.push('/search')}
											className='block text-left -ml-1 p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white transition duration-150'>
											<span>Client</span>
										</button>
									</li>
									<li>
										<button
											onClick={() => router.push('/search')}
											className='block text-left -ml-1 p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white transition duration-150'>
											<span>Event</span>
										</button>
									</li>
								</ul>
							</div>
						)}
					</div>
					<button
						className='flex items-center space-x-2 p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white'
						onClick={() => router.push(`/profile?person=${userName}`)}>
						<BookOpenIcon className='h-5 w-5 ' />
						<p>Your Profile</p>
					</button>
					<button
						className='flex items-center space-x-2 p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white'
						onClick={() => router.push('/dashboard')}>
						<ChartBarIcon className='h-5 w-5 ' />
						<p>Dashboard</p>
					</button>
					<button
						className='flex items-center space-x-2  p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white'
						onClick={() => router.push('/')}>
						<RadioIcon className='h-5 w-5 ' />
						<p>Latest Events </p>
					</button>
					<button
						className='flex items-center space-x-2  p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white'
						onClick={() => router.push('/about')}>
						<UserGroupIcon className='h-5 w-5 ' />
						<p>About </p>
					</button>
					<button
						className='flex items-center space-x-2  p-2 w-full hover:shadow-md hover:shadow-indigo-200    focus:bg-indigo-600 focus:text-white'
						onClick={() =>
							theme === 'dark' ? setTheme('light') : setTheme('dark')
						}>
						<SunIcon className='h-5 w-5 ' />
						<p>Theme </p>
					</button>
					<hr className='border-t-[0.1px] border-gray-400' />
					<button className='flex items-center space-x-2 '>
						<HomeIcon className='h-5 w-5 ' />
						<p>Placeholder </p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SideBar
