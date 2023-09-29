'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavLinkProps = {
	children: React.ReactNode
	href: string
	exact?: boolean
	[key: string]: any
}

export default function NavLink({
	children,
	href,
	exact,
	...props
}: NavLinkProps) {
	const pathname = usePathname()
	const isActive = exact ? pathname === href : pathname.startsWith(href)

	if (isActive) {
		props.className = `${props.className} active `
	}

	return (
		<Link href={href} {...props}>
			{children}
		</Link>
	)
}
