import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='border-b py-4 bg-gray-50'>
			<div className='container mx-auto flex justify-between'>
				Hello World
				<UserButton />
			</div>
		</div>
	)
}

export default Header
