'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import { useTheme } from 'next-themes'
import useSidebar from '@/app/hooks/useSidebar'

import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { Bars3Icon } from '@heroicons/react/24/outline'
import headerNavLinks from '../data/headerNavLinks'
import SearchButton from './SearchButton'
import { BsBook } from 'react-icons/bs'

const NavBar = () => {
	const { data: session } = useSession()
	const router = useRouter()
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const currentRoute = usePathname()
	const [currentUser, setCurrentUser] = useState<string | null | undefined>(
		null
	)

	// todo should deleted after testing
	console.log('navbar refresh')

	const sidebarState = useSidebar()

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (session?.user?.name) setCurrentUser(session?.user?.name)
	}, [session])

	if (!mounted) return null

	return (
		<header className='sticky top-0 z-20    border-b-2 border-gray-400/50  '>
			<nav>
				<div className=' flex  flex-row justify-between items-center  p-4 lg:p-6 '>
					<div className="flex flex-row">
						<Link href='/' className='flex space-x-2'>
							<BsBook className='w-6 h-6 text-indigo-600 dark:text-indigo-100  mr-4'></BsBook>
		</Link>
							<Bars3Icon
								className='w-6 h-6 text-gray-500 dark:text-gray-100 lg:hidden'
								onClick={(e) =>
								{
									e.stopPropagation();
									sidebarState.onOpen()
								}}></Bars3Icon>

					</div>

					<div className='flex justify-around items-center space-x-2 md:space-x-4'>
						{headerNavLinks
							.filter((link) => link.href !== '/')
							.map((link) => (
								<Link
									key={link.title}
									href={link.href}
									className='hidden sm:block font-medium text-gray-900 dark:text-gray-100 hover:underline-4 hover:underline-offset-4 hover:underline-blue-400'>
									{link.title}
								</Link>
							))}
						{!session?.user ? (
							<Link
								href='/login'
								className='hidden sm:block font-medium text-gray-900 dark:text-gray-100'>
								Login
							</Link>
						) : (
							<a
								onClick={() => signOut()}
								href='#'
								className='hidden sm:block font-medium text-gray-900 dark:text-gray-100'>
								Log out
							</a>
						)}
						<SearchButton />
						<ThemeSwitch />
					</div>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
