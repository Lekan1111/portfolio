import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Project</h2>
        <p className="text-zinc-400 text-lg mb-16 max-w-2xl">
          Real products solving real problems — shipped fast, production-ready
        </p>

        
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">           
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full font-medium">
                  Live Product
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                PromptSight
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                24/7 compliance monitoring for crypto projects. Automatically scans Telegram & Discord 
                communities and flags Howey Test violations before the SEC knocks. 
                Real-time AI alerts save teams from legal disasters.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl text-sm font-medium">Next.js 14</span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-xl text-sm font-medium">Claude 3.5</span>
                <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-xl text-sm font-medium">Discord + Telegram</span>
                <span className="px-4 py-2 bg-pink-500/10 text-pink-400 rounded-xl text-sm font-medium">Stripe</span>
              </div>

              <div className="flex flex-wrap gap-6">
                <a
                  href="https://promptsight.vercel.app/"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
                <Link
                  href="/projects/promptsight"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white font-medium transition"
                >
                  View Case Study <ArrowRight size={18} />
                </Link>
              </div>
            </div>
           
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
              <Image
                src="/screenshots/Dashboard.png"
                alt="PromptSight Dashboard"
                width={1800}
                height={1200}
                className="w-full h-full object-cover lg:rounded-l-3xl"
                priority
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-white/90 text-sm font-medium bg-black/40 backdrop-blur px-4 py-2 rounded-full">
                  Interactive Demo Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}