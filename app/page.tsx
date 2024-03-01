import { SignInButton } from '@clerk/nextjs'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<SignInButton mode='modal' />
		</main>
	)
}
