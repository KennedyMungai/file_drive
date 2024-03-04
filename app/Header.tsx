import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'

type Props = {}

const Header = (props: Props) => {
	return (
		<div className='border-b py-4 bg-gray-50'>
			<div className='container mx-auto flex justify-between'>
				<div className='font-semibold text-2xl'>File Drive</div>
				<div className='flex gap-2'>
					<OrganizationSwitcher />
					<UserButton />
				</div>
			</div>
		</div>
	)
}

export default Header
