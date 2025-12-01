import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Azdev - Full-Stack Developer',
  description: 'Building SaaS & Web3 products for ambitious founders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
<footer className="border-t border-zinc-800 mt-20 py-8 text-center text-sm text-zinc-500">
  <p>© 2025 Azeez • <a href="https://twitter.com/azdev911" className="underline">Twitter</a> • <a href="https://github.com/Lekan1111" className="underline">GitHub</a></p>
</footer>