import ConvexClientProvider from '@/providers/ConvexClientProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'File Drive',
	description: 'A file uploading application'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<ConvexClientProvider>{children}</ConvexClientProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
