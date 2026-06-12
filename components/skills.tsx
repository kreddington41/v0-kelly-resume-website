import { Brain, Code, TrendingUp, Zap } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing & Growth",
      skills: [
        "Product Marketing",
        "Growth Hacking",
        "Storytelling",
        "Social Media Growth (X, LinkedIn, YouTube, TikTok, Discord, Farcaster)",
        "SEO",
        "ASO",
        "GEO/LLMO",
        "Email Marketing",
        "Influencer Outreach",
        "Community Building",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Crypto & Blockchain",
      skills: [
        "EVM Compatibility",
        "Solidity",
        "Smart Contracts",
        "OpenZeppelin",
        "Tokenomics Analysis",
        "DeFi",
        "Tokenization",
        "DAOs",
        "Web3",
        "Reward Loops",
        "Gamification",
        "Decentralized Social (DeSo)",
        "Liquid Staking",
        "LSTs",
        "Restaking",
        "Lido",
        "JitoSOL",
        "MEV",
        "EigenLayer",
        "AVSs",
        "CESR (Composite Ether Staking Rate)",
        "ChainLink",
        "Interoperability",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Emerging Tech",
      skills: [
        "Artificial Intelligence",
        "Custom GPT Development",
        "AI Marketing Applications",
        "AI-Generated Content",
        "Google Veo3 Video generation",
        "Gemini Flash 2.5",
        "Midjourney",
        "Lumen5",
        "Murf.ai",
        "V0 Vercel",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Data & Strategy",
      skills: [
        "Market Research",
        "Growth Hacking",
        "Analytics & Engagement Optimization",
        "Funnel Strategy",
        "Audience Segmentation",
        "A/B Testing",
        "Appsflyer OneLinks",
        "Meme Marketing",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
            Key Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
