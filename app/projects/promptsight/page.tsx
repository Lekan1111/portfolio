import { ExternalLink, ArrowLeft, Shield, Bell, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function PromptSightCase() {
  return (
    <main className="min-h-screen pt-24 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">PromptSight Case Study</h1>
        
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <a href="https://promptsight.vercel.app/" className="flex items-center gap-2 text-indigo-400 hover:underline text-lg">
            Visit Live Site <ExternalLink size={18} />
          </a>
          <span className="text-sm bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">Live & Monitoring</span>
        </div>

        
        <div className="relative -mx-6 mb-16 overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
          <Image
            src="/screenshots/Dashboard.png"
            alt="PromptSight Dashboard"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        <h2 className="text-4xl font-bold mb-10">Product Walkthrough</h2>


        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="space-y-4">
            <div className="overflow-x-auto -mx-6 px-6">
              <Image src="/screenshots/Violation2.png" alt="Live monitoring" width={1400} height={900} className="rounded-xl border border-zinc-700 shadow-2xl min-w-[640px]" />
            </div>
            <p className="text-zinc-400 text-center">Live monitoring of all Telegram/Discord messages</p>
          </div>

          <div className="space-y-4">
            <div className="overflow-x-auto -mx-6 px-6">
              <Image src="/screenshots/Violations.png" alt="AI breakdown" width={1400} height={900} className="rounded-xl border border-zinc-700 shadow-2xl min-w-[640px]" />
            </div>
            <p className="text-zinc-400 text-center">AI breakdown of why a message was flagged</p>
          </div>

          <div className="space-y-4">
            <div className="overflow-x-auto -mx-6 px-6">
              <Image src="/screenshots/Trends.png" alt="Risk trends" width={1400} height={900} className="rounded-xl border border-zinc-700 shadow-2xl min-w-[640px]" />
            </div>
            <p className="text-zinc-400 text-center">Track violation trends over time</p>
          </div>

          <div className="space-y-4">
            <div className="overflow-x-auto -mx-6 px-6">
              <Image src="/screenshots/Settings.png" alt="Settings" width={1400} height={900} className="rounded-xl border border-zinc-700 shadow-2xl min-w-[640px]" />
            </div>
            <p className="text-zinc-400 text-center">Configure notifications for your team</p>
          </div>
        </div>

        
        <div className="mb-20">
          <div className="overflow-x-auto -mx-6 px-6">
            <Image src="/screenshots/Billing.png" alt="Billing" width={1600} height={900} className="rounded-xl border border-zinc-700 shadow-2xl min-w-[640px] mx-auto block" />
          </div>
          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold mb-2">Subscription Management</h3>
            <p className="text-zinc-400">Integrated Stripe billing · usage tracking · subscription tiers · automated invoicing</p>
          </div>
        </div>

        
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">The Problem</h2>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            Crypto projects face constant SEC scrutiny. A single message promising returns or using securities language can trigger Howey Test violations.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mt-4">
            Most teams only find out when it’s too late. Legal cleanup? <span className="text-white font-bold">$50K–$500K+</span>
          </p>
        </div>

        
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">The Solution</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-3xl">
            24/7 AI-powered monitoring that scans every message across Telegram & Discord and alerts your team before regulators notice.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <Shield className="text-indigo-400 mb-4" size={36} />
              <h3 className="font-bold mb-2">Real-Time Scanning</h3>
              <p className="text-zinc-400 text-sm">Claude analyzes every message against Howey Test criteria</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <Bell className="text-purple-400 mb-4" size={36} />
              <h3 className="font-bold mb-2">Instant Alerts</h3>
              <p className="text-zinc-400 text-sm">Get notified the second a violation appears</p>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <MessageSquare className="text-emerald-400 mb-4" size={36} />
              <h3 className="font-bold mb-2">Multi-Platform</h3>
              <p className="text-zinc-400 text-sm">Telegram + Discord monitored at once</p>
            </div>
          </div>
        </div>

        
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-3 bg-indigo-500/10 text-indigo-400 rounded-xl font-medium">Next.js 14</span>
            <span className="px-5 py-3 bg-purple-500/10 text-purple-400 rounded-xl font-medium">Claude 3.5 API</span>
            <span className="px-5 py-3 bg-emerald-500/10 text-emerald-400 rounded-xl font-medium">Discord API</span>
            <span className="px-5 py-3 bg-yellow-500/10 text-yellow-400 rounded-xl font-medium">Telegram Bot API</span>
            <span className="px-5 py-3 bg-cyan-500/10 text-cyan-400 rounded-xl font-medium">Supabase</span>
            <span className="px-5 py-3 bg-pink-500/10 text-pink-400 rounded-xl font-medium">Stripe</span>
          </div>
        </div>

        
        <div className="bg-linear-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-12 text-center mt-24">
          <h3 className="text-3xl font-bold mb-4">Ready to ship your idea?</h3>
          <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
            Fixed-price · 2–4 weeks · production-ready code you own
          </p>
          <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-500 transition px-10 py-4 rounded-xl text-lg font-semibold">
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  )
}