import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DomisLink - The World\'s Most Powerful Platform',
  description: '11+ Business Portals. AI-Powered Everything. Zero Limits. Build your empire on DomisLink.',
  keywords: 'DomisLink, Nigeria, business platform, AI, education, marketplace, aviation, real estate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
