'use client'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import {
	SignInButton,
	SignOutButton,
	SignedIn,
	SignedOut,
	useAuth,
	useUser
} from '@clerk/nextjs'
import { useMutation } from 'convex/react'

export default function Home() {
	const { userId, isSignedIn } = useAuth()
	const { user } = useUser()

	const createFile = useMutation(api.files.createFile)

	return (
		<main className='min-h-screen items-center py-8 flex flex-col'>
			<SignedIn>
				<SignOutButton>
					<Button>Sign Out Button</Button>
				</SignOutButton>
			</SignedIn>
			<SignedOut>
				<SignInButton mode='modal'>
					<Button>Sign In</Button>
				</SignInButton>
			</SignedOut>

			<Button onClick={() => createFile({ name: 'hello world' })}>
				Click Me
			</Button>
		</main>
	)
}
