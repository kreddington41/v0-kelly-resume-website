"use client"

import { ExternalLink, FileText, Zap } from "lucide-react"

export function WorkSamples() {
  const samples = [
    {
      category: "Product Marketing",
      icon: <Zap className="w-6 h-6" />,
      description:
        "The aim of my Product Marketing efforts is to translate the product vision into adoption. At the heart of great product marketing is the ability to understand the product, the market, and the end user, ensuring that every message resonates with the right audience.",
      approach: [
        "Positioning: Crafting compelling product narratives that align with market needs, current events, cultural relevance",
        "Go-to-Market Strategy: Developing end-to-end product marketing strategies, including launch plans and retention campaigns",
        "Cross-Functional Collaboration: Working closely with product, sales, and design teams",
        "Data-Driven Insights: Leveraging analytics and client feedback to refine messaging and boost engagement",
      ],
    },
    {
      category: "Content Marketing",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "RWA.xyz Joint Whitepaper",
        "Blog Strategy and Writing (named author and ghostwriter)",
        "Storytelling for Brand awareness and employee advocacy",
        "Copywriting & Creative Ideation",
        "Podcast guest outreach and show notes",
        "Website copy examples",
      ],
    },
  ]

  return (
    <section id="work-samples" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
            Work Samples & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Examples of viral content, strategic campaigns, and product marketing that drive real results
          </p>
        </div>

        {/* Featured: Solana Foundation */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5" />
                Featured
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">The Solana Foundation</h3>
              <p className="text-gray-400 mt-2 max-w-2xl leading-relaxed">
                Launch storytelling for tokenized real-world assets coming live on Solana&mdash;spanning breaking-news
                social campaigns and long-form editorial that tie major AI-infrastructure listings to the network.
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
              href="https://solana.com/news/skhy-is-now-live"
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

        <div className="space-y-12">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-white/10">
                  {sample.icon}
                </div>
                <h3 className="text-2xl font-bold text-red-400">{sample.category}</h3>
              </div>

              {sample.description && <p className="text-gray-300 leading-relaxed mb-6">{sample.description}</p>}

              {sample.approach && (
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-white">My Approach:</h4>
                  {sample.approach.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {sample.items && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sample.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
