import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import GithubProvider from 'next-auth/providers/github'
import db from './prismadb'
import { compare } from 'bcrypt'

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: '/login'
	},
	debug: process.env.NODE_ENV === 'development',
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'jsmith@gmail.com'
				},
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				console.log('credentials', credentials)
				if (!credentials?.email || !credentials?.password) return null

				const existingUser = await db.user.findUnique({
					where: {
						email: credentials.email
					}
				})
				if (!existingUser) return null

				const passwordMatch = await compare(
					credentials.password,
					existingUser.hashedPassword?.toString() || ''
				)

				if (!passwordMatch) return null

				return {
					id: `${existingUser.id}`,
					name: existingUser.name,
					email: existingUser.email
				}
			}
		})
	],

}
