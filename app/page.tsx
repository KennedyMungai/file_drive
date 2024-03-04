'use client'
import { Button } from '@/components/ui/button'
import {
	SignInButton,
	SignOutButton,
	SignedIn,
	SignedOut,
	useAuth,
	useUser
} from '@clerk/nextjs'

export default function Home() {
	const { userId, isSignedIn } = useAuth()
	const { user } = useUser()

	return (
		<main className='min-h-screen items-center py-8 flex flex-col'>
			<SignedIn>
				<SignOutButton />
			</SignedIn>
			<SignedOut>
				<SignInButton mode='modal' />
			</SignedOut>
			<Button>Hello World</Button>
		</main>
	)
}
