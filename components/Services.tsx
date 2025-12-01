import { Code, Palette, Zap } from 'lucide-react'

export default function Services() {
   const services = [
  {
    icon: <Palette size={24} />,
    title: 'Landing Pages',
    price: 'Starting at $1,200',  
    description: 'High-converting pages that make your product shine',
    features: ['Responsive design', 'SEO optimized', '7-day delivery']
  },
  {
    icon: <Code size={24} />,
    title: 'SaaS MVP',
    price: 'Starting at $4,000',  
    description: 'Full-stack applications ready for users',
    features: ['Auth & payments', 'Admin dashboard', '3-4 week delivery']
  },
  {
    icon: <Zap size={24} />,
    title: 'Web3 Integration',
    price: 'Starting at $6,000',  
    description: 'Blockchain features that actually work',
    features: ['Wallet connect', 'Smart contracts', 'Token gating']
  }
]

  return (
    <section id="services" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-[#a3a3a3] mb-12">Fixed-price packages. No surprises.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#6366f1] transition">
              <div className="text-[#6366f1] mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-2xl font-bold text-[#10b981] mb-1">{service.price}</p>
              <p className="text-sm text-[#a3a3a3] mb-4">Fixed scope pricing</p>
              <p className="text-[#a3a3a3] mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="text-sm text-[#a3a3a3] flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

            <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-[#a3a3a3] mb-8 max-w-2xl mx-auto">
            Not sure which package fits your needs? Let's talk. Book a free discovery call 
            or send me a message and I'll help you figure out the best approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/promptsight911/project-delivery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6366f1] px-8 py-3 rounded-lg hover:bg-[#5558e3] transition font-semibold"
            >
              📅 Book a Call
            </a>
            <a 
              href="/contact"
              className="border border-[#2a2a2a] px-8 py-3 rounded-lg hover:border-[#6366f1] transition font-semibold"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}