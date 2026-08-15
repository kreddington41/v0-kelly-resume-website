"use client"

import { ArrowDown, Linkedin, Mail, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("solana-foundation")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url(/images/hero-bg.png)" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent leading-tight pb-2">
            Kelly Reddington
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            Product Marketing & GTM Leader | AI Automations | Fintech & Digital Assets{" "}
          </div>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I translate technically complex B2B products into category narratives, storytelling, positioning, sales enablement, and GTM systems that help sophisticated buyers move from interest to internal conviction.

            My approach combines narrative discipline, deal-specific enablement, proof architecture, and AI-powered automation to give Sales, Product, and Marketing teams the messaging, tools, and systems they need to accelerate execution.
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
          <a
            href="https://kellyreddington.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <BookOpen size={16} />
            <span>Substack</span>
          </a>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
            <Mail size={16} />
            <span>kreddington41@gmail.com</span>
          </div>
          <a
            href="https://www.linkedin.com/in/kellyreddington"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button
            size="lg"
            onClick={scrollToNextSection}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 rounded-full px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            View My Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  )
}
