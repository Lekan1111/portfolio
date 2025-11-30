'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
         scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-[#2a2a2a]' : ''
        }`}>
         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg sm:text-xl font-bold">AZEEZ</Link>
         <div className="flex gap-4 sm:gap-8 items-center text-sm sm:text-base">
         <Link href="/#projects" className="text-[#a3a3a3] hover:text-white transition">Projects</Link>
         <Link href="/#services" className="text-[#a3a3a3] hover:text-white transition">Services</Link>
         <Link href="/contact" className="bg-[#6366f1] px-4 sm:px-6 py-2 rounded-lg hover:bg-[#5558e3] transition text-sm sm:text-base">
           Let's Talk
         </Link>
         </div>
        </div>
      </nav>
   )
  }