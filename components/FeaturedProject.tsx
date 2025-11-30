import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Featured Project</h2>
        <p className="text-[#a3a3a3] mb-12">Real products solving real problems</p>

        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-[#10b981]">● Live Product</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">PromptSight</h3>
              
              <p className="text-[#a3a3a3] mb-6">
                24/7 compliance monitoring for crypto projects. Automatically scans Telegram and Discord 
                communities to flag Howey Test violations before the SEC does. Real-time alerts when your 
                team or community makes risky claims about returns, investment expectations, or securities language.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#6366f1]/10 text-[#6366f1] rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full text-sm">Claude API</span>
                <span className="px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-sm">Discord API</span>
                <span className="px-3 py-1 bg-[#f59e0b]/10 text-[#f59e0b] rounded-full text-sm">Telegram API</span>
              </div>

              <div className="flex gap-4">
                <a href="https://promptsight-landing-page.vercel.app/" className="flex items-center gap-2 text-[#6366f1] hover:underline">
                  Visit Site <ExternalLink size={16} />
                </a>
                <Link href="/projects/promptsight" className="flex items-center gap-2 text-[#a3a3a3] hover:text-white">
                  Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            
            <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#2a2a2a]">
              <img src="/screenshots/Dashboard.png" alt="Dashboard Overview"/>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project Card 1 - Placeholder */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#6366f1] transition">
              <div className="aspect-video bg-linear-to-br from-[#10b981]/20 to-[#059669]/20 rounded mb-4 flex items-center justify-center">
                <span className="text-[#a3a3a3] text-sm">[Project Screenshot]</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Coming Soon</h4>
              <p className="text-[#a3a3a3] text-sm mb-4">
                Next project in development. Building tools that solve real problems for Web3 founders.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#6366f1]/10 text-[#6366f1] rounded text-xs">React</span>
                <span className="px-2 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded text-xs">Web3</span>
              </div>
            </div>

            {/* Project Card 2 - Placeholder */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#6366f1] transition">
              <div className="aspect-video bg-linear-to-br from-[#f59e0b]/20 to-[#d97706]/20 rounded mb-4 flex items-center justify-center">
                <span className="text-[#a3a3a3] text-sm">[Project Screenshot]</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Coming Soon</h4>
              <p className="text-[#a3a3a3] text-sm mb-4">
                Another SaaS product launching soon. Stay tuned for updates.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#6366f1]/10 text-[#6366f1] rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-[#10b981]/10 text-[#10b981] rounded text-xs">API</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}