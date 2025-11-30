import { ExternalLink, ArrowLeft, Shield, Bell, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function PromptSightCase() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#a3a3a3] hover:text-white mb-8">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-6">PromptSight Case Study</h1>
        
        <div className="flex items-center gap-4 mb-12">
          <a href="https://promptsight-landing-page.vercel.app/" className="flex items-center gap-2 text-[#6366f1] hover:underline">
            Visit Live Site <ExternalLink size={16} />
          </a>
          <span className="text-sm text-[#10b981]">● Live & Monitoring</span>
        </div>

        {/* Hero Screenshot */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 mb-12">
          <img src="/screenshots/Dashboard.png" alt="Dashboard Overview"/>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Product Walkthrough</h2>
        <div className="grid md:grid-cols-2 gap-6">

       {/* Screenshot 1 */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
           <img src="/screenshots/Violation2.png" alt="Violation Feed"/>
           <p className="text-[#a3a3a3] text-sm">Live monitoring of all Telegram/Discord messages</p>
        </div>

        {/* Screenshot 2 */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
           <img src="/screenshots/Violations.png" alt="Violation Analysis"/>
           <p className="text-[#a3a3a3] text-sm">AI breakdown of why a message was flagged</p>
      </div>

    {/* Screenshot 3 */}
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
      <img src="/screenshots/Trends.png" alt="Risk Trends"/>
      <p className="text-[#a3a3a3] text-sm">Track violation trends over time</p>
    </div>

    {/* Screenshot 4 */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
      <img src="/screenshots/Settings.png" alt="Customize Settings"/>
      <p className="text-[#a3a3a3] text-sm">Configure notifications for your team</p>
      </div>

      {/* Billing Section - Full Width */}
      <div className="mt-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
      <img src="/screenshots/Billing.png" alt="Billing plan"/>
       <h3 className="font-bold text-xl mb-2">Subscription Management</h3>
       <p className="text-[#a3a3a3]">
         Integrated Stripe billing with usage tracking, subscription tiers, and automated invoicing
       </p>
      </div>

         </div>
        </div>

        {/* Problem Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">The Problem</h2>
          <p className="text-[#a3a3a3] text-lg mb-6">
            Crypto projects face constant SEC scrutiny. A single message in Telegram or Discord promising returns, 
            suggesting investment expectations, or using securities language can trigger Howey Test violations.
          </p>
          <p className="text-[#a3a3a3] text-lg">
            Most projects have no idea what their community managers or users are saying until it's too late. 
            By the time legal reviews catch violations, the SEC may have already noticed. Legal fees for cleanup? 
            <span className="text-white font-semibold"> $50K-$500K+</span>
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p className="text-[#a3a3a3] text-lg mb-8">
            24/7 AI-powered monitoring that scans every message in your Telegram and Discord communities, 
            flags Howey Test violations in real-time, and alerts your team before regulators see it.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <Shield className="text-[#6366f1] mb-3" size={32} />
              <h3 className="font-bold mb-2">Real-Time Scanning</h3>
              <p className="text-[#a3a3a3] text-sm">
                AI analyzes every message against SEC Howey Test criteria
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <Bell className="text-[#8b5cf6] mb-3" size={32} />
              <h3 className="font-bold mb-2">Instant Alerts</h3>
              <p className="text-[#a3a3a3] text-sm">
                Get notified the moment a violation is detected
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <MessageSquare className="text-[#10b981] mb-3" size={32} />
              <h3 className="font-bold mb-2">Multi-Platform</h3>
              <p className="text-[#a3a3a3] text-sm">
                Monitors Telegram and Discord simultaneously
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-[#6366f1]/10 text-[#6366f1] rounded-lg">Next.js 14</span>
            <span className="px-4 py-2 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-lg">Claude API</span>
            <span className="px-4 py-2 bg-[#10b981]/10 text-[#10b981] rounded-lg">Discord API</span>
            <span className="px-4 py-2 bg-[#f59e0b]/10 text-[#f59e0b] rounded-lg">Telegram Bot API</span>
            <span className="px-4 py-2 bg-[#06b6d4]/10 text-[#06b6d4] rounded-lg">Supabase</span>
            <span className="px-4 py-2 bg-[#ec4899]/10 text-[#ec4899] rounded-lg">Stripe</span>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-[#6366f1] rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold mb-1">Connect Your Communities</h3>
                <p className="text-[#a3a3a3]">Add PromptSight bot to your Telegram groups and Discord servers</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold mb-1">AI Monitors Every Message</h3>
                <p className="text-[#a3a3a3]">Claude analyzes content against Howey Test criteria (investment expectation, common enterprise, profit from others' efforts)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold mb-1">Get Instant Alerts</h3>
                <p className="text-[#a3a3a3]">Dashboard shows violations in real-time. Email alerts sent to compliance team</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-bold mb-1">Take Action Fast</h3>
                <p className="text-[#a3a3a3]">Delete risky messages, train team members, prevent SEC scrutiny</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <div className="text-4xl font-bold text-[#10b981] mb-2">24/7</div>
              <div className="text-[#a3a3a3]">Continuous monitoring vs manual spot-checks</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <div className="text-4xl font-bold text-[#10b981] mb-2">&lt;1 min</div>
              <div className="text-[#a3a3a3]">Average detection time per violation</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <div className="text-4xl font-bold text-[#10b981] mb-2">$499/mo</div>
              <div className="text-[#a3a3a3]">vs $50K+ legal cleanup costs</div>
            </div>
          </div>
        </div>

        {/* Key Features List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#a3a3a3]">
              <span className="text-[#10b981] mt-1">✓</span>
              <span>Real-time Howey Test violation detection using GPT-4</span>
            </li>
            <li className="flex items-start gap-3 text-[#a3a3a3]">
              <span className="text-[#10b981] mt-1">✓</span>
              <span>Simultaneous monitoring of multiple Telegram groups and Discord servers</span>
            </li>
            <li className="flex items-start gap-3 text-[#a3a3a3]">
              <span className="text-[#10b981] mt-1">✓</span>
              <span>Dashboard showing violation history, risk scores, and message context</span>
            </li>
            <li className="flex items-start gap-3 text-[#a3a3a3]">
              <span className="text-[#10b981] mt-1">✓</span>
              <span>Instant email/Slack alerts for compliance teams</span>
            </li>
            <li className="flex items-start gap-3 text-[#a3a3a3]">
              <span className="text-[#10b981] mt-1">✓</span>
              <span>Export reports for legal review</span>
            </li>
            <li className="flex items-start gap-3 text-[#a3a3a3]">
              <span className="text-[#10b981] mt-1">✓</span>
              <span>Team member training mode to reduce future violations</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-linear-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border border-[#6366f1]/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Want to build something like this?</h3>
          <p className="text-[#a3a3a3] mb-6">
            I help crypto founders build compliance tools, dashboards, and Web3 integrations.
          </p>
          <Link href="/contact" className="inline-block bg-[#6366f1] px-8 py-3 rounded-lg hover:bg-[#5558e3] transition">
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  )
}