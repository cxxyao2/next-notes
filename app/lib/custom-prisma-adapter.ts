import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/app/lib/prismadb'

class CustomPrismaAdapter extends PrismaAdapter {
	async getUser(id: any) {
		// Your custom logic to retrieve the user by ID from your Prisma database
		let intId = parseInt(id)
		if (isNaN(intId)) intId = 0
		const user = await prisma.user.findUnique({
			where: { id: intId }
		})

		return user
	}
}

export default CustomPrismaAdapter
