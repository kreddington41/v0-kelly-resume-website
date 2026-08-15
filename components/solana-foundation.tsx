"use client"

import { ExternalLink, Zap } from "lucide-react"

export function SolanaFoundation() {
  return (
    <section id="solana-foundation" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Featured: Solana Foundation */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5" />
                Featured &middot; Most Recent
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Solana Foundation</h2>
              <p className="text-gray-400 mt-2 max-w-2xl leading-relaxed">
                Launch storytelling for tokenized real-world assets coming live on Solana&mdash;spanning breaking-news
                social campaigns and long-form editorial thought leadership content that creatively tie major AI-infrastructure providers' offerings to Solana narratives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* NBIS tweet */}
            <a
              href="https://x.com/solana/status/2087171495391003077"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-white/10 bg-black/40 overflow-hidden hover:border-red-500/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-black">
                <img
                  src="/solana/nbis-live-tweet.png"
                  alt="Solana X post announcing $NBIS from Nebius is live on Solana"
                  className="w-full h-56 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">X / Twitter</span>
                <span className="text-white font-semibold mt-1">$NBIS is live on Solana</span>
                <span className="text-gray-400 text-sm mt-1 leading-relaxed flex-1">
                  Breaking-news launch post for Nebius, a ~$48B Nasdaq-listed AI infrastructure provider.
                </span>
                <span className="inline-flex items-center gap-1.5 text-red-400 text-sm font-medium mt-4">
                  View post <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            {/* SKHY LinkedIn post */}
            <a
              href="https://lnkd.in/p/gxF5RHES"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-white/10 bg-black/40 overflow-hidden hover:border-red-500/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-black">
                <img
                  src="/solana/skhy-live-linkedin.png"
                  alt="Solana LinkedIn post announcing tokenized SK Hynix $SKHY is live on Solana"
                  className="w-full h-56 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">LinkedIn</span>
                <span className="text-white font-semibold mt-1">$SKHY is live on Solana</span>
                <span className="text-gray-400 text-sm mt-1 leading-relaxed flex-1">
                  Tokenized SK Hynix, the global HBM leader, framed around AI&apos;s new memory bottleneck.
                </span>
                <span className="inline-flex items-center gap-1.5 text-red-400 text-sm font-medium mt-4">
                  View post <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            {/* SKHY article */}
            <a
              href="https://solana.com/news/skhy-is-now-live"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-white/10 bg-black/40 overflow-hidden hover:border-red-500/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="relative h-56 flex items-center justify-center overflow-hidden bg-[#e0350b]">
                <img
                  src="/solana/skhy-live-editorial.webp"
                  alt="Solana editorial graphic reading SKHY is live on Solana"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                  Editorial &middot; solana.com
                </span>
                <span className="text-white font-semibold mt-1">SKHY is now live</span>
                <span className="text-gray-400 text-sm mt-1 leading-relaxed flex-1">
                  Long-form launch article on solana.com covering SK Hynix&apos;s tokenized listing across three
                  issuers.
                </span>
                <span className="inline-flex items-center gap-1.5 text-red-400 text-sm font-medium mt-4">
                  Read article <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
