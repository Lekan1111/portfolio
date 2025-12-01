import React from "react";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
        I’m Azeez, full-stack engineer obsessed with React, Next.js, and Web3.  
        I help founders ship production-ready SaaS and blockchain products in weeks instead of months.  
        When I’m not coding, I’m hunting critical bugs, reverse-engineering smart contracts, or mentoring the next wave of builders.
      </p>
    </section>
  );
}