'use client'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Landing Page',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', projectType: 'Landing Page', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Let's Build Something</h1>
        <p className="text-xl text-[#a3a3a3] mb-12">
          Have a project in mind? Fill out the form and I'll get back within 24 hours.
        </p>

          <div className="bg-linear-to-br from-[#6366f1]/10 to-[#8b5cf6]/10 border border-[#6366f1]/20 rounded-xl p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-3">Prefer to Talk First?</h2>
            <p className="text-[#a3a3a3] mb-6">
             Book a free 30-minute call to discuss your project requirements.
           </p>
           <a 
             href="https://calendly.com/promptsight911/project-delivery-call"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-[#6366f1] px-8 py-3 rounded-lg hover:bg-[#5558e3] transition font-semibold"
             >
              📅 Schedule a Call
            </a>
         </div>

  
           <div className="text-center mb-8">
            <div className="flex items-center gap-4">
             <div className="flex-1 h-px bg-[#2a2a2a]"></div>
               <span className="text-[#a3a3a3]">or send a message</span>
             <div className="flex-1 h-px bg-[#2a2a2a]"></div>
           </div>
          </div>

  

        {status === 'success' && (
          <div className="bg-[#10b981]/10 border border-[#10b981] rounded-lg p-4 mb-6">
            <p className="text-[#10b981]">✓ Message sent! I'll get back to you soon.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6">
            <p className="text-red-500">✗ Failed to send. Please email me directly.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 focus:border-[#6366f1] outline-none"
            />
          </div>


          <div>
            <label className="block text-sm mb-2">Email</label>
            <input 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 focus:border-[#6366f1] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Project Type</label>
            <select 
              value={formData.projectType}
              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 focus:border-[#6366f1] outline-none"
            >
              <option>Landing Page</option>
              <option>SaaS MVP</option>
              <option>Web3 Integration</option>
              <option>E-Commerce</option>
              <option>Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Tell me about your project</label>
            <textarea 
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 focus:border-[#6366f1] outline-none"
            />
          </div>

          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#6366f1] py-4 rounded-lg hover:bg-[#5558e3] transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 flex gap-6 justify-center text-[#a3a3a3]">
          <a href="azdev911@gmail.com" className="flex items-center gap-2 hover:text-white">
            <Mail size={20} /> azdev911@gmail.com
          </a>
        </div>
      </div>
    </main>
  )
}