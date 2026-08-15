"use client"

import { ExternalLink, Zap } from "lucide-react"

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
    // {
    //   category: "Content Marketing",
    //   icon: <FileText className="w-6 h-6" />,
    //   items: [
    //     "RWA.xyz Joint Whitepaper",
    //     "Blog Strategy and Writing (named author and ghostwriter)",
    //     "Storytelling for Brand awareness and employee advocacy",
    //     "Copywriting & Creative Ideation",
    //     "Podcast guest outreach and show notes",
    //     "Website copy examples",
    //   ],
    // },
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
