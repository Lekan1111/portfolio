import { Calendar, MessageSquare, Code, Rocket } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: "Discovery Call",
      description: "We discuss your goals, timeline, and technical requirements. I'll tell you honestly if I'm the right fit.",
      duration: "30 min"
    },
    {
      icon: <Calendar size={24} />,
      title: "Proposal & Timeline",
      description: "You get a clear scope, fixed price, and delivery date. No surprises, no hourly billing.",
      duration: "1-2 days"
    },
    {
      icon: <Code size={24} />,
      title: "Build & Updates",
      description: "I build in weekly sprints. You get progress updates and previews every Friday. Feedback loops keep us aligned.",
      duration: "2-6 weeks"
    },
    {
      icon: <Rocket size={24} />,
      title: "Launch & Handoff",
      description: "You get the code, deployment guide, and 2 weeks of bug fixes. Then you own it completely.",
      duration: "Ongoing"
    }
  ]

  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">How I Work</h2>
        <p className="text-[#a3a3a3] mb-12">
          Clear process. No surprises. You stay in control.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <div className="text-[#6366f1] mb-4">{step.icon}</div>
              <div className="text-sm text-[#8b5cf6] mb-2">{step.duration}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
       
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-[#10b981] mb-2">Fixed Price</div>
            <p className="text-[#a3a3a3] text-sm">No hourly billing. You know the cost upfront.</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-[#10b981] mb-2">You Own It</div>
            <p className="text-[#a3a3a3] text-sm">Full code ownership. No vendor lock-in.</p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-[#10b981] mb-2">Fast Delivery</div>
            <p className="text-[#a3a3a3] text-sm">Most projects ship in 2-4 weeks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}