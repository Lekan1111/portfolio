'use client'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-mesh pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Image 
         src="/screenshots/Avatar.jpg" 
         alt="AZEEZ"
         width={96}
         height={96}
         className="rounded-full mx-auto mb-6"
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white to-[#a3a3a3] bg-clip-text text-transparent">
          Building SaaS & Web3<br />Products That Ship
        </h1>
        
        <p className="text-xl text-[#a3a3a3] mb-8 max-w-2xl mx-auto">
          Full-stack developer specializing in React, Next.js, and blockchain tech.
          I help founders turn ideas into production-ready products.
        </p>

            <div className="flex gap-4 justify-center mb-8">
             <a 
               href="https://calendly.com/promptsight911/project-delivery-call"
               target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6366f1] px-8 py-3 rounded-lg hover:bg-[#5558e3] transition flex items-center gap-2"
               >
                 Book a Call <ArrowRight size={18} />
               </a>
               <Link href="/#projects" className="border border-[#2a2a2a] px-8 py-3 rounded-lg hover:border-[#6366f1] transition">
                 View Work
               </Link>
            </div>
       
        <div className="flex gap-4 justify-center text-[#a3a3a3]">
          <a href="https://github.com/Lekan1111" className="hover:text-white transition"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/azeez-lekan-a9748b299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-white transition"><Linkedin size={20} /></a>
          <a href="https://x.com/Azdev911?t=kkJMlPrlfZHs_NVKAopPYQ&s=09" className="hover:text-white transition"><Twitter size={20} /></a>
        </div>
      </div>
    </section>
  )
}