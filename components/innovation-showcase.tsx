"use client"

import { Brain, Smartphone, Globe } from "lucide-react"

export function InnovationShowcase() {
  const projects = [
    {
      category: "AI & Automation",
      icon: <Brain className="w-6 h-6" />,
      projects: [
        {
          title: "AI Executive Avatars",
          description:
            "Designed workflows to transform executives into animated avatars that recite blog posts interactively",
          executives: ["Will Peck", "Jason Guthrie", "Jeremy Siegel"],
          tech: ["AI Workflows", "Digital Clones", "Interactive Content"],
        },
        {
          title: "AI Accessibility Integration",
          description: "Spearheaded Murph.AI adoption for WCAG-compliant voice narration of blog posts",
          impact: "Enhanced accessibility and engagement",
          tech: ["Murph.AI", "WCAG Compliance", "Voice Generation"],
        },
        {
          title: "Generative AI Marketing",
          description: "Utilized Google Veo3 to produce brand-consistent imagery and animations",
          tech: ["Google Veo3", "Brand Consistency", "Campaign Assets"],
        },
      ],
    },
    {
      category: "Growth & App Marketing",
      icon: <Smartphone className="w-6 h-6" />,
      projects: [
        {
          title: "App Store Optimization",
          description: "Managed listings across Apple App Store and Google Play with custom landing pages",
          impact: "Drove organic downloads through keyword optimization and A/B testing",
          tech: ["ASO", "Keyword Targeting", "A/B Testing"],
        },
        {
          title: "WisdomTree Prime Copywriting",
          description: "Wrote crypto-native copy establishing flagship app's authoritative voice",
          scope: ["Homepage", "About Page", "Brand Voice Guidelines"],
        },
      ],
    },
    {
      category: "Web3 & Onchain Innovation",
      icon: <Globe className="w-6 h-6" />,
      projects: [
        {
          title: "DataVIS Project",
          description: "Developed structured onchain identity for seamless Web3 integration",
          platforms: ["Dune", "Nansen", "Developer Platforms"],
          impact: "Amplified brand visibility across Web3 ecosystems",
        },
        {
          title: "Onchain Transparency",
          description: "Standardized token metadata to make products discoverable and trusted",
          focus: ["Token Metadata", "Verification", "Discoverability"],
        },
      ],
    },
  ]

  return (
    <section id="innovation" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Innovation in Action
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Leading-edge AI, automation, and Web3 projects that drive real business impact
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-red-400">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    {project.tech && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs border border-red-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.impact && <div className="text-sm text-gray-400 italic">Impact: {project.impact}</div>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
