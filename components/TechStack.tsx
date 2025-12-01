import React from "react";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiSupabase, SiVercel, SiEthereum, SiNodedotjs, SiPrisma } from "react-icons/si";

const tech = [
  { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
  { name: "React", icon: SiReact, color: "hover:text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "hover:text-blue-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "hover:text-teal-400" },
  { name: "Supabase", icon: SiSupabase, color: "hover:text-green-400" },
  { name: "Vercel", icon: SiVercel, color: "hover:text-white" },
  { name: "Ethereum / EVM", icon: SiEthereum, color: "hover:text-purple-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500" },
  { name: "Prisma", icon: SiPrisma, color: "hover:text-cyan-500" },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tools I Use to Ship Fast
        </h2>
        <p className="text-zinc-400 mb-12">
          Production-grade stack that gets you from idea → live in weeks
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8">
          {tech.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110"
            >
              <div className="p-5 bg-zinc-800/50 border border-zinc-700 rounded-2xl group-hover:border-purple-500/50 transition-colors">
                <item.icon className={`text-4xl transition-colors ${item.color}`} />
              </div>
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}