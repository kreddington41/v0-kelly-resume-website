"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Brain, Search, Target, Volume2, Maximize2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CaseStudy() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState("")

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isFullscreen])

  const slides = [
    {
      id: 0,
      title: "Strategic Ticker Branding Framework",
      subtitle: "Systematic Approach to Financial Product Naming",
      icon: <Target className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-4">The Strategic Challenge</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Ticker symbols are more than just identifiers—they're the first impression, the mental anchor, and the
              trust signal for financial products. Every character matters.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I developed a comprehensive framework combining psychology, linguistics, and market dynamics to optimize
              ticker selection across multiple WisdomTree products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">USDW vs WTUSD</div>
              <div className="text-gray-300 text-sm">Stablecoin Strategy</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">CRDT vs CRDY</div>
              <div className="text-gray-300 text-sm">Credit Product Positioning</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">EPIC vs WEPI</div>
              <div className="text-gray-300 text-sm">Equity Fund Branding</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">My Analytical Framework</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>• Market Alignment & Pattern Recognition</div>
              <div>• Cognitive Fluency & Processing Speed</div>
              <div>• Sound Symbolism & Emotional Resonance</div>
              <div>• Phonetic Intensity & Trust Signals</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "USDW vs WTUSD: Stablecoin Strategy",
      subtitle: "Market Alignment & Trust Patterns",
      icon: <Target className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">The USD Pattern Advantage</h3>
            <p className="text-gray-300 mb-4">
              Dominant stablecoin naming follows a clear convention that users trust and recognize instantly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["USDC", "USDT", "USDG", "USD1"].map((ticker) => (
                <div key={ticker} className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30">
                  <div className="text-red-400 font-bold">{ticker}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">USDW Advantages</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Chunked as "USD + W"</li>
                <li>• Vowel-led, familiar pattern</li>
                <li>• 6 syllables, easy flow</li>
                <li>• Instant category recognition</li>
                <li>• Groups with trusted stables</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">WTUSD Challenges</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Consonant cluster start</li>
                <li>• 7 syllables, harder parsing</li>
                <li>• Breaks expected pattern</li>
                <li>• Lower discoverability</li>
                <li>• Requires exact search</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Strategic Outcome</h4>
            <p className="text-gray-300 text-sm">
              <strong>Recommendation: USDW</strong> - Aligns with how humans think, speak, scan, and trust. Category
              clarity first, brand differentiation second.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "CRDT vs CRDY: Credit Product Analysis",
      subtitle: "Sound Symbolism & Institutional Trust",
      icon: <Volume2 className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Market Alignment Analysis</h3>
            <p className="text-gray-300 mb-4">
              Both CRDT and CRDY are direct plays on "credit," but their sound, structure, and associations create
              different impressions that matter for institutional branding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">CRDT: Sharp Authority</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hard "T" stop - clean, precise, assertive</li>
                <li>• Aligns with institutional naming trends</li>
                <li>• Firm mouth closure reinforces control</li>
                <li>• Sharp, clipped authority</li>
                <li>• Trust, fluency, professionalism</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">CRDY: Softer Approach</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Soft "Y" vowel glide - rounds off energy</li>
                <li>• Opens door to unwanted phonetic slippage</li>
                <li>• Softened ending creates negative homophone risk</li>
                <li>• Less emotional authority</li>
                <li>• Uncertainty, softness, lower recall</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Bouba/Kiki Effect Applied</h4>
            <p className="text-gray-300 text-sm mb-3">
              Research shows sharp sounds are associated with precision and power, while soft sounds suggest passivity
              and lower energy.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="text-gray-300">
                <strong>CRDT:</strong> Sharp consonants, clear finish, hard stop
              </div>
              <div className="text-gray-300">
                <strong>CRDY:</strong> Angular sounds with soft ending
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "EPIC vs WEPI: Equity Fund Positioning",
      subtitle: "Emotional Resonance & Narrative Fit",
      icon: <Brain className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Emotional Resonance Analysis</h3>
            <p className="text-gray-300 mb-4">
              EPIC is powerful, high-fluency, and aspirational. It has brand narrative baked in: bold, memorable, and a
              natural shorthand for a product that aims to define advanced equity income.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">EPIC: Bold & Energetic</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Strong lip pop with "P"</li>
                <li>• Open "EH" vowel (used in happy expressions)</li>
                <li>• Sharp "K" close that reinforces control</li>
                <li>• Energized articulation = energized perception</li>
                <li>• Clarity, recall, confidence</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">WEPI: Soft & Forgettable</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Rounded lips with "W" (like blowing or sighing)</li>
                <li>• Trailing "I" that drifts rather than lands</li>
                <li>• Doesn't land — it leaks</li>
                <li>• Rounded, soft-like shape = low emotional payoff</li>
                <li>• Low signal strength, weaker trust profile</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Neuroscience of Sound & Meaning</h4>
            <p className="text-gray-300 text-sm mb-3">
              Research shows high-energy phonemes like "P" and "K" stimulate dopaminergic reward centers in the brain,
              while soft sounds activate emotional associations of sadness or fragility.
            </p>
            <div className="text-center">
              <div className="text-red-400 font-bold">EPIC lights up reward circuits — it feels good to say</div>
              <div className="text-gray-400 text-sm mt-2">
                WEPI has no such impact. Worse, it sounds like "weepy" — not ideal for fund marketing.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Phonetic Intensity & Linguistic Trust",
      subtitle: "The Science Behind Sound Perception",
      icon: <Search className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Cross-Analysis Patterns</h3>
            <p className="text-gray-300 mb-4">
              Consistent patterns emerge across all three ticker analyses, validating the strategic framework.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Phonetic Intensity Research</h4>
              <p className="text-gray-300 text-sm mb-3">
                Studies show that fluency directly influences risk perception, recall, and brand credibility. Names that
                are easier to pronounce are judged as more familiar, credible, and safe.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-red-400 font-bold">USDW</div>
                  <div className="text-gray-300">Tightly constructed, clear rhythm</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-red-400 font-bold">CRDT</div>
                  <div className="text-gray-300">Sharp, precise, authoritative</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-red-400 font-bold">EPIC</div>
                  <div className="text-gray-300">Bold, energetic, commanding</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Embodied Cognition Impact</h4>
              <p className="text-gray-300 text-sm mb-3">
                How we physically produce sounds affects how we emotionally interpret them. Firm mouth closures suggest
                control and precision, while open glides can suggest uncertainty.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <strong>Winning Patterns:</strong>
                  <br />• Sharp consonants and clear stops
                  <br />• Familiar phonetic structures
                  <br />• Strong articulatory gestures
                </div>
                <div>
                  <strong>Avoid:</strong>
                  <br />• Soft endings and vowel glides
                  <br />• Consonant clusters at start
                  <br />• Homophone risks
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "USDW vs WTUSD: Complete Analysis Document",
      subtitle: "Full Strategic Breakdown & Email Communication",
      icon: <Brain className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Original Strategic Analysis Email</h3>
            <p className="text-gray-300 mb-4">
              The complete email analysis that led to the USDW recommendation, including market alignment research,
              cognitive fluency theory, and comprehensive linguistic analysis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-4">
              <div
                className="w-full h-[600px] overflow-y-auto bg-white rounded-lg shadow-2xl cursor-pointer group relative"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ef4444 #f1f5f9",
                }}
                onClick={() => openFullscreen("/images/usdw-complete-analysis.png")}
              >
                <img
                  src="/images/usdw-complete-analysis.png"
                  alt="Complete USDW vs WTUSD Strategic Analysis Email"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  style={{ minHeight: "100%", objectFit: "contain" }}
                />

                {/* Expand overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-red-500 text-white p-3 rounded-full">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4">
              <p className="text-center text-gray-400 text-sm mb-2">Click image to expand to full screen</p>
              <p className="text-center text-gray-500 text-xs">
                Scroll within the image above to view the complete document
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "CRDT vs CRDY and EPIC vs WEPI Analysis",
      subtitle: "Complete Strategic Breakdown & Email Communication",
      icon: <Brain className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Original Strategic Analysis Email</h3>
            <p className="text-gray-300 mb-4">
              The complete email analysis covering both CRDT vs CRDY and EPIC vs WEPI. This document shows the detailed
              sound symbolism research, Bouba/Kiki effect application, and embodied cognition analysis that led to both
              the CRDT and EPIC recommendations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl border border-white/10 overflow-hidden">
            <div className="p-4">
              <div
                className="w-full h-[600px] overflow-y-auto bg-white rounded-lg shadow-2xl cursor-pointer group relative"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ef4444 #f1f5f9",
                }}
                onClick={() => openFullscreen("/images/crdt-epic-analysis.png")}
              >
                <img
                  src="/images/crdt-epic-analysis.png"
                  alt="Complete CRDT vs CRDY and EPIC vs WEPI Strategic Analysis Email"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  style={{ minHeight: "100%", objectFit: "contain" }}
                />

                {/* Expand overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-red-500 text-white p-3 rounded-full">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4">
              <p className="text-center text-gray-400 text-sm mb-2">Click image to expand to full screen</p>
              <p className="text-center text-gray-500 text-xs">
                Scroll within the image above to view the complete document
              </p>
            </div>
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

  const openFullscreen = (image: string) => {
    setFullscreenImage(image)
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    setFullscreenImage("")
  }

  return (
    <>
      <section id="case-study" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
              Strategic Ticker Branding
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Comprehensive analysis of ticker optimization across multiple WisdomTree products, combining psychology,
              linguistics, and market dynamics
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

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="w-full h-full overflow-auto bg-white rounded-lg"
              onWheel={(e) => {
                // Prevent event from bubbling up to prevent background scroll
                e.stopPropagation()
              }}
            >
              <img
                src={fullscreenImage || "/placeholder.svg"}
                alt="Fullscreen view"
                className="w-full h-auto"
                style={{ minHeight: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
