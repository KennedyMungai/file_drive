import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='border-b'>
			<div className='container mx-auto flex justify-between'>
				Hello World
				<UserButton />
			</div>
		</div>
	)
}

export default Header
