"use client"

import { useState } from "react"
import { Zap, ExternalLink, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MemeShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideshows = [
    {
      id: 0,
      title: "Meme Marketing Portfolio",
      subtitle: "Original Viral Content Collection",
      embedSrc: "https://www.canva.com/design/DAGTI0yzUQI/AjMeynilyDQRVzAmK0Dy1Q/view?embed",
      viewLink:
        "https://www.canva.com/design/DAGTI0yzUQI/AjMeynilyDQRVzAmK0Dy1Q/view?utm_content=DAGTI0yzUQI&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Full Meme Slideshow",
      paddingTop: "100.0000%",
      icon: <Zap className="w-6 h-6" />,
      isVideo: false,
    },
    {
      id: 1,
      title: "Extended Meme Collection",
      subtitle: "Additional Viral Content & Community Engagement",
      embedSrc: "https://www.canva.com/design/DAGTOuJMOk4/A8-gHxdrhP_aC9DeZtM9uQ/view?embed",
      viewLink:
        "https://www.canva.com/design/DAGTOuJMOk4/A8-gHxdrhP_aC9DeZtM9uQ/view?utm_content=DAGTOuJMOk4&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Extended Meme Collection",
      paddingTop: "100.0000%",
      icon: <Zap className="w-6 h-6" />,
      isVideo: false,
    },
    {
      id: 2,
      title: "Meme Video Examples",
      subtitle: "Dynamic Video Content & Animated Memes",
      embedSrc: "https://www.canva.com/design/DAGTPJjruMg/I65kmuVC8n1mTQ2lQvMY0g/watch?embed",
      viewLink:
        "https://www.canva.com/design/DAGTPJjruMg/I65kmuVC8n1mTQ2lQvMY0g/watch?utm_content=DAGTPJjruMg&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Meme Video Examples",
      paddingTop: "100.0000%",
      icon: <Play className="w-6 h-6" />,
      isVideo: true,
    },
    {
      id: 3,
      title: "Advanced Meme Video Collection",
      subtitle: "Extended Video Content & Creative Animations",
      embedSrc: "https://www.canva.com/design/DAGYM0C2Wdw/ca8omqgNjH3-gNtViWlcCQ/watch?embed",
      viewLink:
        "https://www.canva.com/design/DAGYM0C2Wdw/ca8omqgNjH3-gNtViWlcCQ/watch?utm_content=DAGYM0C2Wdw&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Advanced Meme Videos",
      paddingTop: "100.0000%",
      icon: <Play className="w-6 h-6" />,
      isVideo: true,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshows.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshows.length) % slideshows.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="meme-showcase" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
            Meme Marketing & Viral Content
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Strategic meme marketing and viral content creation that drives engagement and builds authentic connections
            with crypto-native audiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">{slideshows[currentSlide].icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-red-400">{slideshows[currentSlide].title}</h3>
                  <p className="text-gray-300">{slideshows[currentSlide].subtitle}</p>
                </div>
                <div className="text-sm text-gray-400">
                  {currentSlide + 1} of {slideshows.length}
                </div>
              </div>
            </div>

            {/* Slideshow Container */}
            <div className="p-8">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: slideshows[currentSlide].paddingTop,
                  paddingBottom: 0,
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  marginTop: "1.6em",
                  marginBottom: "0.9em",
                  overflow: "hidden",
                  borderRadius: "8px",
                  willChange: "transform",
                }}
              >
                <iframe
                  key={currentSlide} // Force re-render when slide changes
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                    ...(slideshows[currentSlide].isVideo && {
                      objectFit: "contain",
                    }),
                  }}
                  src={slideshows[currentSlide].embedSrc}
                  allowFullScreen={true}
                  allow="fullscreen"
                />
              </div>

              <div className="text-center mt-6">
                <a
                  href={slideshows[currentSlide].viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  <span>{slideshows[currentSlide].linkText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-sm text-gray-400 mt-2">by Kelly Reddington</p>
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
                  {slideshows.map((_, index) => (
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
                  disabled={currentSlide === slideshows.length - 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="text-center mt-4 text-gray-400 text-sm">
                Slide {currentSlide + 1} of {slideshows.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
