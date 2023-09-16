import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Spinner from './components/Spinner'
import ScrollToTop from './components/ScrollToTop'

import ClientSessionProvider from './components/ClientSessionProvider'
import ThemeProvider from './components/ThemeProvider'
import ClientOnly from './components/ClientOnly'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} bg-white text-black antialiased dark:bg-gray-950 dark:text-white `}>
				<ClientOnly>
					<ClientSessionProvider>
						<ThemeProvider>
							<div className='flex h-screen  relative overflow-hidden'>
								<SideBar />
								<div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
									<NavBar />
									<main className='mb-auto p-4 lg:p-6'>
										<section className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
											{children}
										</section>
									</main>
									<Footer />
									<Spinner />
									<ScrollToTop />
								</div>
							</div>
						</ThemeProvider>
					</ClientSessionProvider>
				</ClientOnly>
			</body>
		</html>
	)
}
