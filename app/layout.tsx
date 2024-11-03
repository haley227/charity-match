import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: 'Charity Match',
  description:
    'Charity Match is a platform that helps you find the perfect charity to donate to. We match you with charities based on your interests and values.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
