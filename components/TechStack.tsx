export default function TechStack() {
  const stack = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Supabase', 'Web3.js', 'Ethers.js'
  ]

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
        <p className="text-[#a3a3a3] mb-12">Tools I use to ship fast</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {stack.map((tech, i) => (
            <div key={i} className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}