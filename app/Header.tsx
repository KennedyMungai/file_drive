import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='border-b'>
			<div className='container mx-auto'>Hello World</div>
            <UserButton />
		</div>
	)
}

export default Header
