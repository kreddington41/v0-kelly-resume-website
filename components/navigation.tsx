"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#kraken-institutional", label: "Kraken Institutional" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#meme-showcase", label: "Meme Marketing" },
    { href: "#work-samples", label: "Work Samples" },
    { href: "#crypto-copywriting", label: "Copywriting" },
    { href: "#case-study", label: "Case Study" },
    { href: "#geo-strategy", label: "GEO Strategy" },
    { href: "#datavis-showcase", label: "DataVIS" },
    { href: "#aso-showcase", label: "ASO" },
    { href: "#certifications", label: "Certifications" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Kelly Reddington
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Expandable Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-all duration-300 py-3 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
