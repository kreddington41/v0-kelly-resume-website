"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  Zap,
  Users,
  Settings,
  TrendingUp,
  Code,
  Maximize2,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function DataVISShowcase() {
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
      title: "DataVIS Initiative: Strategic Overview",
      subtitle: "Bringing Visibility, Identity & Structure to WisdomTree's Onchain Presence",
      icon: <Database className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-4">The Strategic Challenge</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              In Web3, fragmented data across platforms creates friction for developers, partners, and institutional
              adoption. WisdomTree needed a unified onchain presence that builds trust and simplifies integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Visibility</div>
              <div className="text-gray-300 text-sm">Discoverable on analytics platforms</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Identity</div>
              <div className="text-gray-300 text-sm">Consistent brand across chains</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Structure</div>
              <div className="text-gray-300 text-sm">Centralized source of truth</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Why This Matters</h4>
            <p className="text-gray-300 text-sm">
              "In crypto, transparency and easy access to docs, contract address info, and APIs builds trust and creates
              a more uniform brand experience onchain."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "The Onchain Product Kit Strategy",
      subtitle: "Solving Developer & Partner Friction Points",
      icon: <Globe className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">The Central Hub Concept</h3>
            <p className="text-gray-300 mb-4">
              A dedicated onchain product kit that serves as the single source of truth for all WisdomTree onchain
              products, accessible at wisdomtreeprime.com/onchainkit or onchainkit.wisdomtreeprime.com
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Use Case: Dashboard Integration</h4>
              <p className="text-gray-300 text-sm mb-2">
                "A dashboard like RWA.xyz or stabledash wants to list our products?"
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> One URL with all contract addresses, tickers, logo links, and relevant
                information.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Use Case: Data Partners</h4>
              <p className="text-gray-300 text-sm mb-2">
                "A data partner like Nansen or CoinMetrics asks to pull NAV or AUM data?"
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Convenient link explaining indexing logic and API access.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Use Case: Developer Tools</h4>
              <p className="text-gray-300 text-sm mb-2">"Zapper or DefiLlama wants to display our logos for tokens?"</p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Pre-formatted, brand consistent downloadable assets.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Competitive Analysis & Market Position",
      subtitle: "Learning from Crypto Leaders",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Industry Best Practices</h3>
            <p className="text-gray-300 mb-4">
              "Others in the space have it, and if we want to make things simple and straightforward for people to
              include our products in their products, this is the way to go."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Leading Examples</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  • <strong>Coinbase/Base:</strong> Comprehensive OnchainKit API docs
                </li>
                <li>
                  • <strong>Ondo:</strong> Centralized address documentation
                </li>
                <li>
                  • <strong>Superstate:</strong> Smart contract introductions
                </li>
                <li>
                  • <strong>Securitize:</strong> Postman API documentation
                </li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">WisdomTree Advantage</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Traditional finance credibility</li>
                <li>• Multi-chain product suite</li>
                <li>• Institutional-grade compliance</li>
                <li>• Developer-friendly approach</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Strategic Positioning</h4>
            <p className="text-gray-300 text-sm">
              "Another way to reinforce the idea that WisdomTree is easy to work with and has an onchain presence that
              is a cut above the competition."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Technical Architecture & Components",
      subtitle: "Building the Onchain Product Kit",
      icon: <Code className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Core Components</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive developer resource targeting data platforms, block explorers, and developers who prefer
              self-serve documentation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">🏷️ Official Token Information</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Token names and tickers</li>
                <li>• Contract addresses with chain breakdown (Ethereum, Base, Arbitrum)</li>
                <li>• OpenZeppelin audit highlights</li>
                <li>• Explorer links and verified contracts</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">🎨 Logos & Metadata</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• PNG logos for dashboards and wallet experiences</li>
                <li>• TrustWallet and CoinGecko asset repository links</li>
                <li>• Wallet labeling standards</li>
                <li>• .eth and onchain identity naming conventions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">🔌 APIs & Data Access</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Public-facing, read-only API documentation</li>
                <li>• Static JSON files for daily data pulls</li>
                <li>• Integration with existing digital funds API</li>
                <li>• Contact form for integration requests</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "3-Phase Implementation Strategy",
      subtitle: "Discovery → Integration → Maintenance",
      icon: <Settings className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Strategic Rollout Plan</h3>
            <p className="text-gray-300 mb-4">"Developed a Three step process for us to kickstart this initiative."</p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-green-400">Phase 1: Discovery Phase ✅</h4>
              </div>
              <ul className="space-y-1 text-gray-300 text-sm ml-6">
                <li>• Platform inventory and analysis</li>
                <li>• Contract address compilation</li>
                <li>• Technical requirements scoping</li>
                <li>• Competitive benchmarking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-yellow-400">Phase 2: Platform Outreach & Integration 🔄</h4>
              </div>
              <ul className="space-y-1 text-gray-300 text-sm ml-6">
                <li>• Direct platform partnerships</li>
                <li>• API integrations and testing</li>
                <li>• Brand asset distribution</li>
                <li>• Developer documentation deployment</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="text-lg font-semibold text-blue-400">Phase 3: Maintenance 📋</h4>
              </div>
              <ul className="space-y-1 text-gray-300 text-sm ml-6">
                <li>• Ongoing platform relationship management</li>
                <li>• Data accuracy monitoring</li>
                <li>• New integration requests</li>
                <li>• Performance analytics and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Partnership & Integration Impact",
      subtitle: "Building the WisdomTree Ecosystem",
      icon: <Users className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Target Partnership Ecosystem</h3>
            <p className="text-gray-300 mb-4">
              Strategic integrations across analytics platforms, developer tools, and institutional infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-md font-bold text-red-400 mb-2">Analytics Platforms</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• RWA.xyz - RWA dashboard integration</li>
                  <li>• Nansen - Institutional analytics</li>
                  <li>• CoinMetrics - Data partnership</li>
                  <li>• Messari - Research Report Integration</li>
                </ul>
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-md font-bold text-red-400 mb-2">Developer Tools</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Zapper - Portfolio tracking</li>
                  <li>• DefiLlama - TVL aggregation</li>
                  <li>• Dune Analytics - Custom dashboards</li>
                  <li>• Block explorers (Etherscan, BaseScan, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-md font-bold text-red-400 mb-2">Chain Ecosystems</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Base - L2 RWA exploration</li>
                  <li>• Ethereum - Primary deployment</li>
                  <li>• Stellar - RWA expansion</li>
                  <li>• Cross-chain visibility</li>
                </ul>
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-md font-bold text-red-400 mb-2">Use Case Example</h4>
                <p className="text-gray-300 text-sm italic">
                  "A Base Dev exploring RWAs for his Dune dashboard can access all of our contract addresses in one
                  convenient, centralized location."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Strategic Outcome</h4>
            <p className="text-gray-300 text-sm">
              Improved institutional visibility, streamlined partner integrations, and reinforced positioning as the
              easiest traditional finance company to work with in Web3.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Innovation: AI-Powered Developer Experience",
      subtitle: "Next-Generation Developer Relations",
      icon: <Zap className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">ChatGPT Plugin/Embedded Assistant</h3>
            <p className="text-gray-300 mb-4">
              "Embed an assistant trained on our dev docs and contracts. Inspired by the Fantom and Base Builder
              Assistants."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Inspiration Examples</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  • <strong>Build on Base Assistant:</strong> Solidity expert for Base ecosystem
                </li>
                <li>
                  • <strong>Fantom GPT:</strong> Comprehensive protocol assistant
                </li>
                <li>
                  • <strong>Developer-focused AI:</strong> Instant technical support
                </li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">WisdomTree AI Features</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Trained on WisdomTree dev docs</li>
                <li>• Contract interaction guidance</li>
                <li>• API usage examples</li>
                <li>• Integration troubleshooting</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Developer Experience Vision</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong>24/7 Support:</strong> Instant answers to technical questions
              </div>
              <div>
                <strong>Self-Service:</strong> Reduced support ticket volume
              </div>
              <div>
                <strong>Onboarding:</strong> Faster developer integration
              </div>
              <div>
                <strong>Innovation:</strong> Cutting-edge developer relations
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Strategic Innovation</h4>
            <p className="text-gray-300 text-sm">
              Positioning WisdomTree at the forefront of Web3 developer experience with AI-powered support and
              documentation.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Original DataVIS Proposal Document",
      subtitle: "Complete Strategic Initiative Email",
      icon: <Database className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Original Strategic Proposal Email</h3>
            <p className="text-gray-300 mb-4">
              The complete email proposal that outlined the DataVIS initiative, including competitive analysis,
              technical requirements, and implementation strategy.
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
                onClick={() => openFullscreen("/images/datavis-proposal.png")}
              >
                <img
                  src="/images/datavis-proposal.png"
                  alt="Complete DataVIS Initiative Proposal Email"
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
      id: 8,
      title: "DataVIS Initiative Update Document",
      subtitle: "Progress Report & Strategic Framework",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Initiative Progress Update</h3>
            <p className="text-gray-300 mb-4">
              Follow-up communication showing the refined DataVIS framework (Visibility, Identity, Structure) and
              current implementation status across the three-phase rollout.
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
                onClick={() => openFullscreen("/images/datavis-update.png")}
              >
                <img
                  src="/images/datavis-update.png"
                  alt="DataVIS Initiative Progress Update"
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
      <section id="datavis-showcase" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
              DataVIS Initiative
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Strategic initiative to bring Visibility, Identity, and Structure to WisdomTree's onchain data presence
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
