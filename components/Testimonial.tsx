import React from "react";

export default function Testimonial() {
  return (
    <section className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-12">
          Trusted by Founders
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          <div className="bg-zinc-800/60 border border-zinc-700 rounded-2xl p-8 md:p-10">
            <p className="text-zinc-300 text-lg leading-relaxed italic">
              “We engaged Azeez to review our prediction market dApp on BNB Testnet.  
              He found a critical, launch-breaking staking bug that would have destroyed user trust, gave clear UX feedback, and saved us weeks of dev time.  
              Absolute professional — highly recommend.”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-blue-500 rounded-full shrink-0" />
              <div>
                <p className="font-semibold text-white">Hanson Braganza</p>
                <p className="text-zinc-400 text-sm">Founder @ Grailix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}