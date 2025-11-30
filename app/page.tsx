import Hero from '@/components/Hero'
import FeaturedProject from '@/components/FeaturedProject'
import Services from '@/components/Services'
import Process from '@/components/Process'
import TechStack from '@/components/TechStack'
import  Link  from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProject />
      <Services />
      <Process />
      <TechStack />
      <section className="py-32 px-6 text-center">
       <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Product?
         </h2>
         <p className="text-xl text-[#a3a3a3] mb-8">
           I'm taking on 2-3 projects per month. Let's talk about yours.
         </p>
         <Link 
         href="/contact" 
           className="inline-block bg-[#6366f1] px-10 py-4 rounded-lg hover:bg-[#5558e3] transition text-lg font-semibold"
         >
          Get Started
         </Link>
        </div>
</section>
    </main>
  )
}