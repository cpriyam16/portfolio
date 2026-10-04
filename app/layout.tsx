import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Priyam Chakraborty | Web Engineer & Technology Consultant',
  description:
    'Priyam Chakraborty is a web engineer and technology consultant with 13+ years of experience building digital products, leading teams, and helping ideas reach production.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
