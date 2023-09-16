'use client'

import { ThemeProvider } from 'next-themes'
import ClientOnly from './ClientOnly'

export default function ThemeProviders({ children }: { children: React.ReactNode }) {
	return (
		<ClientOnly>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
				{children}
			</ThemeProvider>
		</ClientOnly>
	)
}
