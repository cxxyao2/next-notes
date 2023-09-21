'use client'

import { PuffLoader } from 'react-spinners'
import useLoader from '../hooks/useLoader'

const Loader = () => {
	const { isLoading } = useLoader()

	if (!isLoading) return null
	return (
		<div
			className='
    fixed
      h-[100vh]
      w-[100vw]
      flex
      flex-col
      justify-center
      items-center
    '>
			<PuffLoader size={100} color='red' />
		</div>
	)
}

export default Loader
