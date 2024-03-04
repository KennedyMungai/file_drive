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
import { useMutation, useQuery } from 'convex/react'

export default function Home() {
	const createFile = useMutation(api.files.createFile)
	const files = useQuery(api.files.getFiles)

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

			{files?.map((file, index) => (
				<div key={index}>{file.name}</div>
			))}

			<Button onClick={() => createFile({ name: 'hello world' })}>
				Click Me
			</Button>
		</main>
	)
}
