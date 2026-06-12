"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Maximize2, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CryptoCopywriting() {
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
      title: "Original WisdomTree Homepage",
      subtitle: "Traditional Fintech Messaging",
      description:
        "The original homepage used conventional financial services language with promotional offers and traditional marketing approaches that didn't authentically connect with crypto-native audiences.",
      image: "/images/wisdomtree-original.png",
      keyPoints: [
        "'The future of finance is here' - generic fintech messaging",
        "Promotional offers like 'Get $100 in Bitcoin!'",
        "Traditional financial services tone and design",
        "Corporate marketing approach with multiple CTAs",
      ],
    },
    {
      id: 1,
      title: "Crypto-Native Rewrite",
      subtitle: "Web3-Focused Messaging & Positioning",
      description:
        "My rewrite transformed the messaging to speak directly to crypto natives with authentic Web3 language and positioning.",
      image: "/images/wisdomtree-crypto-native.png",
      keyPoints: [
        "'Wisdom Is Your Edge' - powerful, direct messaging",
        "Onchain assets, composable, transparent language",
        "DeFi and Web3 terminology throughout",
        "Crypto-native value propositions",
      ],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
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
      <section id="crypto-copywriting" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
              Crypto Native Copywriting
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Transforming traditional fintech messaging into authentic crypto-native language that resonates with Web3
              audiences
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              {/* Slide Header */}
              <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-6 border-b border-white/10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-red-400">{slides[currentSlide].title}</h3>
                    <p className="text-gray-300">{slides[currentSlide].subtitle}</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {currentSlide + 1} of {slides.length}
                  </div>
                </div>
              </div>

              {/* Slide Content */}
              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Description & Key Points */}
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                      <p className="text-gray-300 leading-relaxed">{slides[currentSlide].description}</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-red-400 mb-4">Key Elements</h4>
                      <ul className="space-y-3">
                        {slides[currentSlide].keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {currentSlide === 1 && (
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-3">Impact</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          The crypto-native rewrite positioned WisdomTree Prime as a Web3-first platform, using
                          authentic terminology that crypto natives understand and trust. This approach bridges
                          traditional finance with DeFi, speaking to both audiences effectively.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Scrollable Image */}
                  <div className="space-y-4">
                    <div className="relative">
                      <div
                        className="w-full h-[600px] overflow-y-auto bg-white rounded-xl shadow-2xl border-2 border-white/10 cursor-pointer group"
                        style={{
                          scrollbarWidth: "thin",
                          scrollbarColor: "#ef4444 #f1f5f9",
                        }}
                        onClick={() => openFullscreen(slides[currentSlide].image)}
                      >
                        <img
                          src={slides[currentSlide].image || "/placeholder.svg"}
                          alt={slides[currentSlide].title}
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

                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-2">Click image to expand to full screen</p>
                      <p className="text-gray-500 text-xs">Scroll within the image above to view the complete page</p>
                    </div>
                  </div>
                </div>
              </div>

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
                        onClick={() => setCurrentSlide(index)}
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
              </div>
            </div>

            {/* Comparison Summary */}
            <div className="mt-12 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Transformation Summary</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Before: Traditional Fintech</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Generic "better system" messaging</li>
                    <li>• Corporate financial services tone</li>
                    <li>• Limited crypto terminology</li>
                    <li>• Traditional value propositions</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">After: Crypto-Native</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Direct, powerful "Wisdom Is Your Edge"</li>
                    <li>• Authentic Web3 language throughout</li>
                    <li>• Onchain, composable, DeFi terminology</li>
                    <li>• Crypto-native value propositions</li>
                  </ul>
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
