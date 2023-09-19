'use client'

import { useRouter } from "next/navigation";

const SearchButton = () =>
{

	const router = useRouter()
	return (
		<button aria-label='Search' type='button' onClick={()=>router.push('/search')}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='text-gray-900 dark:text-gray-100 h-6 w-6'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
				/>
			</svg>
		</button>
	)
}

export default SearchButton