import { Building2, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Associate, Marketing",
      company: "WisdomTree Asset Management",
      location: "New York",
      period: "Current Position",
      type: "Current",
      sections: [
        {
          title: "Brand & Strategy",
          highlights: [
            "Built and scaled WisdomTree Prime's social media strategy, positioning the app to capture both crypto-native and mainstream audiences, driving adoption through multi-channel campaigns",
            "Created and aligned brand messaging across Twitter/X, LinkedIn, YouTube, email, website, in-app, and TV ads, optimizing for engagement and downloads",
            "Established the onchain brand voice, writing foundational crypto-native copy (Homepage, About page, etc) that anchored the app's positioning in a competitive crypto app market",
            "Owned executive social media accounts and strategy, working directly with senior leaders (CEO, CLO, Head of Digital Assets, Head of BizDev, Product, Strategy) to craft compelling thought leadership content",
            "Worked cross-functionally across product, compliance, legal, design, UX/UI, PR, and Investor Relations teams to ensure marketing content met regulatory & compliance standards (FINRA, SEC)",
            "Implemented WCAG standards for Website & Content Accessibility, ensuring compliance and successfully protecting the brand against litigation risks",
            "Conceptualized and launched the DataVIS initiative to standardize WisdomTree's onchain identity, ensuring seamless integration with leading analytics platforms (Dune, Nansen, Messari, RWA.xyz, etc.)",
          ],
        },
        {
          title: "App Store Listings",
          highlights: [
            "Created and managed App Store listings on both Apple App Store Connect and Google Play Console, including custom product landing pages, localized creative assets, and keyword optimization",
            "Drove significant app growth through App Store Optimization (ASO), increasing organic downloads through optimized descriptions, A/B-tested images, and metadata improvements",
            "Designed & launched custom promotional store listings tailored for campaigns and audiences",
          ],
        },
        {
          title: "Artificial Intelligence & Innovation",
          highlights: [
            "Pioneered the use of AI avatars for executive thought leadership, developing digital clones of senior leaders (Will Peck, Jason Guthrie, Jeremy Siegel) to deliver interactive blog content and pilot chatbot-driven engagement",
            "Integrated Murf.ai into the blog publishing workflow for WCAG-compliant, AI-generated narration, improving accessibility and engagement",
            "Directed AI adoption across marketing operations, leading the AI Committee in researching and deploying tools and workflows such as customGPTs to accelerate content generation",
            "Leveraged Google Veo3, Lumen5, Midjourney, and other generative AI tools to create branded imagery, animations, and video assets",
          ],
        },
        {
          title: "Content & Product Marketing",
          highlights: [
            "Growth hacked Crypto Clarified podcast, doubling subscriber growth rate",
            "Identified and recruited podcast guests from companies such as Circle, CoinFund, Fractal, and more",
            "Authored and ghostwrote blog posts and research white papers on crypto, tokenization, and Digital Assets",
            "Created Tokenization 101 Lead Anchor document for WisdomTree Tokenization Projects targeting RIA's, Crypto-native startups, DAO treasuries, hedge funds, and family offices",
            "Achieved 6x industry benchmark engagement rates by curating viral social content, influencer collabs, & brand campaigns",
          ],
        },
      ],
    },
    {
      title: "Fractional CMO/Growth & Strategy Consultant",
      company: "Reddeq",
      location: "Remote",
      period: "Past",
      type: "Consulting",
      highlights: [
        "Advised Angel, Seed, and Series-A Founders on go-to-market (GTM) strategy, product positioning, and messaging, driving market adoption for startups across fintech, crypto, AI and deep tech",
        "Developed high-impact investor and customer-facing materials, including landing pages, pitch decks, brand stories, blog posts, email campaigns, and personas to enhance fundraising and market fit",
        "Conducted market research & competitive analysis, identifying key trends and best practices to position startups effectively",
        "Supported startups in raising $40M+ in funding",
        "Collaborated with incubators, accelerators, launchpads, and investment groups (Angel Syndicates, HNWIs, Family Offices) to secure early-stage funding and strategic partnerships",
        "Advised on GTM strategy and product marketing for multiple high-growth startups, including ACV Auctions - Virtual Lift and Graphene Devices - Next-gen battery tech",
        "Developed crypto market insights & investment theses, analyzing onchain data, social sentiment, and macro trends across Bitcoin, Ethereum, Solana, Fantom (now Sonic), Avalanche, Near, Cosmos, and other blockchain ecosystems",
        "Advised startups in the StartupNY, LaunchNY, and Z80 Labs (Techstars affiliate) ecosystems, refining growth strategies, branding, and customer acquisition through storytelling and data-driven insights",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Building2 size={18} />
                    <span className="text-lg font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-4 lg:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === "Current"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {exp.type}
                </div>
              </div>

              {/* Sections for detailed breakdown */}
              {exp.sections ? (
                <div className="space-y-6">
                  {exp.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-3">
                      <h4 className="text-lg font-semibold text-red-400 border-b border-red-500/20 pb-2">
                        {section.title}
                      </h4>
                      <div className="space-y-3">
                        {section.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {exp.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{highlight}</span>
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
