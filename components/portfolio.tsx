"use client"

import { useState } from "react"
import { ExternalLink, ChevronLeft, ChevronRight, Building2, Zap, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideshows = [
    {
      id: 0,
      title: "Corporate Communications",
      subtitle: "Professional Corporate & Business Communications",
      embedSrc: "https://www.canva.com/design/DAGxAZTkRlE/JfsM5skp-0yC6K6aJIoEKw/view?embed",
      viewLink:
        "https://www.canva.com/design/DAGxAZTkRlE/JfsM5skp-0yC6K6aJIoEKw/view?utm_content=DAGxAZTkRlE&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Corporate Communications Portfolio",
      paddingTop: "100.0000%",
      icon: <Building2 className="w-6 h-6" />,
      description:
        "Professional corporate communications, business presentations, and strategic messaging designed for executive and institutional audiences.",
    },
    {
      id: 1,
      title: "Advertisement Portfolio",
      subtitle: "High-Impact Advertisements & Social Media Campaigns",
      embedSrc: "https://www.canva.com/design/DAGT5I_f7jk/f9WITpF4AcHdPHR3nXNTuw/view?embed",
      viewLink:
        "https://www.canva.com/design/DAGT5I_f7jk/f9WITpF4AcHdPHR3nXNTuw/view?utm_content=DAGT5I_f7jk&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Full Advertisement Portfolio",
      paddingTop: "100.0000%",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Explore my collection of high-impact advertisements, social media campaigns, and creative content that achieved 6x industry benchmark engagement rates.",
    },
    {
      id: 2,
      title: "Twitter Threads Portfolio",
      subtitle: "Strategic Thread Content for Retail & Institutional Audiences",
      embedSrc: "https://www.canva.com/design/DAGTguOp3Zc/9zT7A86K8SZiFeubP_URoA/view?embed",
      viewLink:
        "https://www.canva.com/design/DAGTguOp3Zc/9zT7A86K8SZiFeubP_URoA/view?utm_content=DAGTguOp3Zc&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Twitter Threads Portfolio",
      paddingTop: "100.0000%",
      icon: <MessageSquare className="w-6 h-6" />,
      description:
        "I have experience crafting Twitter threads for both retail and institutional audiences. This slideshow features a few examples of my work. Click/tap the image to be taken to the full thread on X.",
    },
    {
      id: 3,
      title: "Social Media Post Examples",
      subtitle: "Influencer-Style Content & Engagement-Driven Posts",
      embedSrc: "https://www.canva.com/design/DAGT3ktaMd0/7y8CsDDLg4AaAqFkB_T2YA/view?embed",
      viewLink:
        "https://www.canva.com/design/DAGT3ktaMd0/7y8CsDDLg4AaAqFkB_T2YA/view?utm_content=DAGT3ktaMd0&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
      linkText: "View Social Media Examples",
      paddingTop: "100.0000%",
      icon: <Users className="w-6 h-6" />,
      description:
        "Examples of social media posts designed to drive engagement and build authentic connections with audiences across multiple platforms.",
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
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
            Ads, Threads, Social Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mt-4" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of viral content, strategic campaigns, and high-engagement social media posts that achieved 6x
            industry benchmark engagement rates
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

            {/* Content Description */}
            <div className="px-8 pt-6">
              <p className="text-gray-300 text-center leading-relaxed">{slideshows[currentSlide].description}</p>
            </div>

            {/* Canva Embed Container */}
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
                  borderRadius: "12px",
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
