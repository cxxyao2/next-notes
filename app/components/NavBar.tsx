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
import NavLink from './NavLink'

const NavBar = () => {
	const { data: session } = useSession()
	const router = useRouter()
	const [mounted, setMounted] = useState(false)
	const navLinkClassName =
		'hidden sm:block font-medium rounded-lg px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 active:underline  active:decoration-blue-400'

	const sidebarState = useSidebar()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<header className='fixed top-0 h-[60px] z-20  w-full  border-b-2 border-gray-400/50  '>
			<nav>
				<div className=' flex  flex-row justify-between items-center  p-4 lg:p-6 '>
					<div className='flex flex-row'>
						<Link href='/' className='flex space-x-2'>
							<BsBook className='w-6 h-6 text-rose-600 dark:text-rose-100  mr-4'></BsBook>
							<span className='hidden md:inline-block font-sans font-bold text-lg text-rose-400'>
								Home
							</span>
						</Link>
						<Bars3Icon
							className='w-6 h-6 text-gray-500 dark:text-gray-100 lg:hidden'
							onClick={(e) => {
								e.stopPropagation()
								sidebarState.onOpen()
							}}></Bars3Icon>
					</div>

					<div className='flex justify-around items-center space-x-2 md:space-x-4'>
						{headerNavLinks
							.filter((link) => link.href !== '/')
							.map((link) => (
								<NavLink
									key={link.title}
									href={link.href}
									exact={false}
									className={navLinkClassName}>
									{link.title}
								</NavLink>
							))}
						{!session?.user ? (
							<NavLink href='/login' exact={false} className={navLinkClassName}>
								Login
							</NavLink>
						) : (
							<a
								onClick={() => signOut()}
								href='#'
								className={navLinkClassName}>
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
