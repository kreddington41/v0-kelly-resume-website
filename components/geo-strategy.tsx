"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Lightbulb, TrendingUp, Search, Zap, Brain, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GeoStrategy() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 0,
      title: "Strategic Initiative: The AI Discovery Shift",
      subtitle: "Identifying the Future Before It Arrives",
      icon: <Lightbulb className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-4">The Insight</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              "AI is fundamentally changing how people discover content and products. I'd like us to get ahead of this
              shift with a thoughtful, informed strategy."
            </p>
            <p className="text-gray-300 leading-relaxed">
              Instead of scrolling through search results, users are relying on AI-generated answers, summaries, and
              recommendations. This trend is already impacting organic traffic and will only accelerate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <div className="text-3xl font-bold text-red-400 mb-2">Before</div>
              <div className="text-gray-300 text-sm">Traditional SEO mindset</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <div className="text-3xl font-bold text-red-400 mb-2">After</div>
              <div className="text-gray-300 text-sm">GEO/LLMO strategy</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Strategic Questions Framework",
      subtitle: "Comprehensive Research Approach",
      icon: <Search className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">My Strategic Research Framework</h3>
            <p className="text-gray-300 mb-4">
              I developed a comprehensive approach to understand and leverage the shift from SEO to GEO:
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">1. Understanding GEO/LLMO</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• How to optimize for AI-generated answers (ChatGPT, Google AI, Perplexity)</li>
                <li>• Factors that increase content citation likelihood</li>
                <li>• Tools and plugins for GEO optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">2. ASO Evolution Impact</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• How AI results affect app store listings</li>
                <li>• Crossover between ASO and GEO strategies</li>
                <li>• Future of app discovery</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">3. Success Metrics & Best Practices</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Emerging GEO best practices identification</li>
                <li>• Competitive analysis of early adopters</li>
                <li>• Actionable implementation roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "The Challenge: Black Box Problem",
      subtitle: "Understanding the Complexity",
      icon: <Brain className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Two Fundamental Problems Identified</h3>
            <p className="text-gray-300 mb-4">
              Our research revealed why GEO/LLMO is so challenging compared to traditional SEO:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Problem 1: Attribution Mystery</h4>
              <p className="text-gray-300 text-sm mb-3">
                Deciphering the black box of LLM sourcing to correctly attribute citations and references.
              </p>
              <div className="text-xs text-gray-400">Unlike SEO's clear rules, LLMs operate probabilistically</div>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Problem 2: Training Data Opacity</h4>
              <p className="text-gray-300 text-sm mb-3">
                Understanding vector, timing, and frequency of training data and live search functions.
              </p>
              <div className="text-xs text-gray-400">Pattern-based vs deterministic outcomes</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">The "Wild West" Phase</h4>
            <p className="text-gray-300 text-sm">
              We're in an ambiguous phase where lack of transparency makes it difficult to plan or optimize confidently.
              LLM providers will eventually need to provide structured guidance similar to how search engines matured.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Tactical Solutions Discovered",
      subtitle: "LLM-Specific Growth Hacks",
      icon: <Zap className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Emerging GEO Tactics</h3>
            <p className="text-gray-300 mb-4">
              While foundational content strategy remains king, I identified specific LLM optimization tactics:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">1. Press Release Networks</h4>
              <p className="text-gray-300 text-sm mb-2">
                LLMs prioritize content labeled as "press releases" from authoritative sources.
              </p>
              <div className="text-xs text-gray-400">
                Strategy: Distribute interconnected press releases across partner networks
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">2. Pattern Density Saturation</h4>
              <p className="text-gray-300 text-sm mb-2">
                LLMs are pattern recognition engines - republishing across multiple platforms increases indexing
                frequency.
              </p>
              <div className="text-xs text-gray-400">
                Platforms: WisdomTreePrime.com, Mirror.xyz, Medium, Substack, etc.
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">3. Direct OpenAI Listing</h4>
              <p className="text-gray-300 text-sm mb-2">
                Proactive approach to list funds, app, services, and data platforms directly with OpenAI.
              </p>
              <div className="text-xs text-gray-400">Early adoption of ChatGPT Search Product Discovery</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Competitive Advantage: BI Tool Access",
      subtitle: "Peeling Back the LLM Layers",
      icon: <Target className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-4">The Solution</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Access to a business intelligence tool specifically designed to map LLM sourcing and attribution
              preferences - essentially a "prompt-to-source visibility layer."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-3">What This Enables</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Peek into the LLM "black box"</li>
                <li>• Map sourcing preferences</li>
                <li>• Understand attribution patterns</li>
                <li>• Optimize content strategy accordingly</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Strategic Position</h4>
              <p className="text-gray-300 text-sm">
                "We are ahead of most and are in an excellent position to path-find a way through this unexplored
                territory."
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">First-Mover Advantage</h4>
            <p className="text-gray-300 text-sm">
              While everyone else is still figuring out the basics, we're already implementing advanced BI tools and
              strategic frameworks for GEO optimization.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Strategic Impact & Leadership",
      subtitle: "Driving Innovation Through Foresight",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10 mb-6">
              <h3 className="text-3xl font-bold text-red-400 mb-4">Strategic Leadership in Action</h3>
              <p className="text-gray-300 text-lg">
                Identifying market shifts before they become mainstream and building competitive advantages through
                early adoption
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-4">✅ What I Delivered</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Identified the SEO → GEO shift early</li>
                <li>• Developed comprehensive research framework</li>
                <li>• Secured access to cutting-edge BI tools</li>
                <li>• Created actionable implementation strategy</li>
                <li>• Positioned team ahead of competition</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-4">🎯 Strategic Outcomes</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• First-mover advantage in GEO/LLMO</li>
                <li>• Advanced tooling for LLM optimization</li>
                <li>• Cross-functional team alignment</li>
                <li>• Future-proofed content strategy</li>
                <li>• Competitive intelligence advantage</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">The Kelly Reddington Approach</h4>
            <p className="text-gray-300 text-sm">
              Spot emerging trends → Research comprehensively → Build strategic frameworks → Secure competitive
              advantages → Lead implementation
            </p>
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="geo-strategy" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
            Strategic Foresight: SEO to GEO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            How I identified and led the strategic shift from traditional SEO to Generative Engine Optimization,
            positioning our team ahead of the curve in AI-driven discovery
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Slide Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">{slides[currentSlide].icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">{slides[currentSlide].title}</h3>
                  <p className="text-gray-300">{slides[currentSlide].subtitle}</p>
                </div>
              </div>
            </div>

            {/* Slide Content */}
            <div className="p-8 min-h-[500px]">{slides[currentSlide].content}</div>

            {/* Navigation */}
            <div className="p-6 border-t border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  className="border-red-500/40 text-red-400 hover:bg-red-500/20 hover:border-red-400 bg-transparent transition-all duration-300"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {/* Slide Indicators */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-gradient-to-r from-red-500 to-red-600"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  variant="outline"
                  className="border-red-500/40 text-red-400 hover:bg-red-500/20 hover:border-red-400 bg-transparent transition-all duration-300"
                  disabled={currentSlide === slides.length - 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="text-center mt-4 text-gray-400 text-sm">
                Slide {currentSlide + 1} of {slides.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
