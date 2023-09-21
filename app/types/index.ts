import {  User,Mynote } from '@prisma/client'


export type SafeUser = Omit<
	User,
	'createdAt' | 'updatedAt' | 'emailVerified'|'hashedPassword'
> & {
	createdAt: string
	updatedAt: string
	emailVerified: string | null
}


export type SafeNote = Omit<
	Mynote,
	'createdAt' | 'updatedAt' | 'occurredAt'
> & {
	createdAt: string
	updatedAt: string
	occurredAt: string
}