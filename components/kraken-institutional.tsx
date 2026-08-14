"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Building2, ExternalLink, FileText, BookOpen, FolderOpen, Maximize2, X, Sparkles, Workflow, FileCheck, TrendingUp, Users, Mail } from "lucide-react"

export function KrakenInstitutional() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentDocSlide, setCurrentDocSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState("")

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isFullscreen])

  const slides = [
    {
      title: "Kraken Institutional Content Portfolio",
      subtitle: "Product Marketing & Content Strategy",
      embedUrl: "https://www.canva.com/design/DAHKTm4_J4A/SuOBc7RO9d4QDagQ3NRVTA/view?embed",
      linkUrl: "https://www.canva.com/design/DAHKTm4_J4A/SuOBc7RO9d4QDagQ3NRVTA/view",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const documentSlides = [
    {
      title: "Infrastructure for the OFFICIAL TRUMP Token Ecosystem",
      description: "Product 1-pager covering qualified custody, OTC execution, derivatives access, collateral capabilities, and broader strategic partnership opportunities.",
      imageUrl: "/kraken/official-trump-token.png",
    },
    {
      title: "BTC Covered Calls Strategy Spotlight",
      description: "Strategy spotlight explaining covered call strategies for BTC holders, including strategy overview, why Kraken VIP, and steady premium capture performance metrics.",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/btc_covered_calls_single_image-qL5M1SzCXGGNNavyHrba03q0FazK7o.png",
    },
    {
      title: "Kraken Prime for Hedge Funds",
      description: "Comprehensive product marketing for hedge funds covering qualified custody, execution & OTC liquidity, capital efficiency, regulated derivatives, and staking & yield.",
      imageUrl: "/kraken/kraken-prime-hedge-funds.png",
    },
    {
      title: "Kraken Prime for Venture Capitalists",
      description: "Product marketing for VCs covering token custody & vesting, execution & OTC liquidity, LP reporting & governance, staking, yield, and financing.",
      imageUrl: "/kraken/kraken-prime-vcs.png",
    },
    {
      title: "Kraken Prime for Asset Managers",
      description: "Product marketing for asset managers covering qualified custody, algorithmic execution & OTC liquidity, integration & reporting with fund administrators, and custody-native staking & yield.",
      imageUrl: "/kraken/kraken-prime-asset-managers.png",
    },
    {
      title: "OTC Options Primer",
      description: "Educational primer explaining crypto options — what they are, pricing mechanics, strategies, key risks, and worked payoff diagrams — for institutional market participants.",
      imageUrl: "/kraken/otc-options-primer.png",
    },
    {
      title: "Vendor Sprawl — Kraken 360 TGE Readiness Series",
      description: "Thought-leadership blog (part 3 of 8) on why fragmented, multi-vendor token-launch stacks fail at the seams, and how Kraken 360 consolidates custody, distribution, liquidity and exchange coordination into one system.",
      imageUrl: "/kraken/vendor-sprawl.png",
    },
    {
      title: "Kraken Institutional Brochure",
      description: "Full institutional brochure spanning custody, prime, OTC, staking, Kraken 360 and Payward Services — with the 'Why Kraken?' benefits, by-the-numbers proof points, and who-we-serve breakdown. Tap to view the complete multi-page brochure.",
      imageUrl: "/kraken/kraken-institutional-brochure.png",
    },
    {
      title: "Kraken Institutional for Asset Allocators",
      description: "Allocator-focused brochure covering algorithmic execution, qualified custody, multi-jurisdictional support, and index provision — positioning Kraken as an all-in-one turnkey partner across the digital asset product lifecycle.",
      imageUrl: "/kraken/asset-allocators-brochure.png",
    },
  ]

  const nextDocSlide = () => {
    setCurrentDocSlide((prev) => (prev + 1) % documentSlides.length)
  }

  const prevDocSlide = () => {
    setCurrentDocSlide((prev) => (prev - 1 + documentSlides.length) % documentSlides.length)
  }

  return (
    <section id="kraken-institutional" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent leading-tight pb-2">
            Kraken Institutional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4 mb-8"></div>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
            I joined Kraken Institutional as a Senior Product Marketer focused on content strategy and creation across
            seven product pods, translating complex crypto and financial infrastructure into clear institutional
            narratives.
          </p>

          {/* Product Pods */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl mx-auto">
            {[
              { name: "Kraken360", note: "full-stack protocol offering" },
              { name: "Prime Brokerage", note: null },
              { name: "OTC", note: null },
              { name: "Custody", note: null },
              { name: "Ramp", note: "on/off ramps" },
              { name: "Embed", note: "crypto-as-a-service" },
              { name: "Exchange Trading", note: "family offices & hedge funds" },
            ].map((pod) => (
              <span
                key={pod.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-white font-medium">{pod.name}</span>
                {pod.note && <span className="text-gray-500">{pod.note}</span>}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Ramp and Embed together form Payward Services, Kraken&apos;s B2B offering.
          </p>

          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed mt-8">
            Across these pods I ideated, created, and measured results for brochures, blog posts and content systems,
            long-form educational primers, thought leadership strategy, sales enablement materials, and social posts. I
            focused on broad strategy&mdash;tying our product offerings to industry narratives to trendjack our presence
            and grow the pipeline.
          </p>

          {/* Growth Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-center text-red-500 mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white">0 &rarr; 1k+</div>
              <div className="text-gray-400 text-sm mt-1">followers on X / Twitter</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-center text-red-500 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white">4,000+</div>
              <div className="text-gray-400 text-sm mt-1">LinkedIn followers</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-center text-red-500 mb-2">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white">5,700+</div>
              <div className="text-gray-400 text-sm mt-1">newsletter subscribers I built &amp; ran</div>
            </div>
          </div>

          <p className="text-white font-bold max-w-4xl mx-auto text-lg leading-relaxed mt-10">
            I blend institutional positioning, infrastructure narratives, regulated financial messaging, and complex product abstraction to create content systems.
          </p>
        </div>

        {/* AI Tools & Agent Workflows */}
        <div className="mb-20 rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-500/[0.07] to-transparent p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Differentiator
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">AI Tools &amp; Agent Workflows</h3>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Beyond the content itself, I built the systems that produced it. I designed multiple AI tools and agent
              workflows that streamlined content creation across the institutional org&mdash;wiring Claude to Figma and
              Google Workspace through MCP connectors to eliminate the design and content bottlenecks that used to take
              weeks.
            </p>
          </div>

          {/* Claude + Figma workflow */}
          <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-red-500/10">
                <Workflow className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="text-lg font-semibold text-white">On-Demand Enablement Generator</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialized Claude skills use MCP connectors to pull source docs from Google Workspace and build decks,
              one-pagers, and enablement materials against our Figma template libraries. Sales and VIP relationship
              managers could spin up bespoke, client-tailored content on an as-needed basis, removing the design
              bottleneck entirely and saving weeks of turnaround.
            </p>
          </div>

          {/* Named messaging assistants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phil - institutional */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-red-500/10">
                  <FileCheck className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    &ldquo;Phil&rdquo; &middot; Institutional Messaging Assistant
                  </h4>
                  <span className="text-xs text-gray-500">named after the Modern Family character</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                An n8n automation where PMs and PMMs upload content and get an automated grade against our messaging and
                brand guidelines. Phil kept every piece of Institutional marketing content aligned and on-brand at
                scale&mdash;without adding a manual review step.
              </p>
            </div>

            {/* Gloria - consumer */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-red-500/10">
                  <FileCheck className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    &ldquo;Gloria&rdquo; &middot; Consumer Messaging Assistant
                  </h4>
                  <span className="text-xs text-gray-500">the consumer-arm counterpart to Phil</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Gloria did the same for the consumer side of the business, keeping push notifications, newsletter
                content, and in-app UX copy aligned with brand voice and messaging across every consumer touchpoint.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="text-center bg-black/40 border border-white/10 rounded-xl p-5">
              <div className="text-2xl font-bold text-white">Weeks &rarr; hours</div>
              <div className="text-gray-500 text-sm mt-1">content turnaround</div>
            </div>
            <div className="text-center bg-black/40 border border-white/10 rounded-xl p-5">
              <div className="text-2xl font-bold text-white">Zero</div>
              <div className="text-gray-500 text-sm mt-1">design bottlenecks for sales</div>
            </div>
            <div className="text-center bg-black/40 border border-white/10 rounded-xl p-5">
              <div className="text-2xl font-bold text-white">100% on-brand</div>
              <div className="text-gray-500 text-sm mt-1">automated guideline checks</div>
            </div>
          </div>
        </div>

        {/* Slideshow */}
        <div className="relative">
          {/* Slide Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Building2 className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold text-white">{slides[currentSlide].title}</h3>
            </div>
            <p className="text-gray-400">{slides[currentSlide].subtitle}</p>
          </div>

          {/* Canva Embed */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.25%", overflow: "hidden" }}>
              <iframe
                key={currentSlide}
                loading="lazy"
                style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none" }}
                src={slides[currentSlide].embedUrl}
                allowFullScreen
                allow="fullscreen"
              />
            </div>
          </div>

          {/* View Full Slideshow Link */}
          <div className="text-center mt-6">
            <a
              href={slides[currentSlide].linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Slideshow
            </a>
          </div>

          {/* Navigation Buttons - Only show if more than 1 slide */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-white/20 hover:bg-red-500/20 hover:border-red-400 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-white/20 hover:bg-red-500/20 hover:border-red-400 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Slide Indicators - Only show if more than 1 slide */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-red-500 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Blog Posts Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold text-white">Blog Posts I Wrote While at Kraken</h3>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              These blog posts display clear product marketing principles, content logic ladders, and oftentimes tie into the company&apos;s mission for impactful conclusions.
            </p>
          </div>

          <div className="space-y-8">
            {/* Product Integration Announcement */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">Product Integration Announcement</h4>
                  <a
                    href="https://blog.kraken.com/product/ramp/now-live-on-onramper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Now Live on Onramper
                  </a>
                </div>
              </div>
            </div>

            {/* Kraken 360 Thought Leadership */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-3">Kraken 360 Thought Leadership Content System</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <a
                      href="https://blog.kraken.com/product/360/the-tge-checklist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Part 1: The TGE Checklist
                    </a>
                    <a
                      href="https://blog.kraken.com/product/360/pre-tge-playbook-part-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Part 2: Pre-TGE Playbook
                    </a>
                    <a
                      href="https://blog.kraken.com/product/360/pre-tge-playbook-part-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Part 3: Pre-TGE Playbook
                    </a>
                    <a
                      href="https://blog.kraken.com/product/360/pre-tge-playbook-part-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Part 4: Pre-TGE Playbook
                    </a>
                    <a
                      href="https://blog.kraken.com/product/360/the-vendor-sprawl-problem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Part 5: Vendor Sprawl Problem
                    </a>
                    <a
                      href="https://blog.kraken.com/product/360/6-vendors-to-lock-in-before-mint"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Part 6: 6 Vendors to Lock In
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchange Trading API Unlocked */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">Exchange Trading &apos;API Unlocked&apos; Content System</h4>
                  <a
                    href="https://blog.kraken.com/category/product/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View API Content Series
                  </a>
                </div>
              </div>
            </div>

            {/* Kraken Custody SPL Token Support */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">Kraken Custody Expanded Asset Support</h4>
                  <a
                    href="https://blog.kraken.com/product/kraken-institutional/spl-token-support-for-solana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    SPL Token Support for Solana
                  </a>
                  <p className="text-gray-500 text-xs mt-2">
                    This post taps into the internet capital markets narrative popularized by the Solana ecosystem, naturally segues into a Kraken 360 product spotlight, and ends with an inter-weaving of Solana&apos;s mission and Kraken&apos;s founding mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Product Marketing Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-bold text-white">Institutional Product Marketing</h3>
            </div>
            <p className="text-gray-400 max-w-4xl mx-auto mb-4">
              Specialized in translating complex crypto and financial infrastructure into clear institutional narratives across Kraken Institutional&apos;s custody, execution, staking, financing, derivatives, and token lifecycle offerings.
            </p>
            <p className="text-gray-400 max-w-4xl mx-auto">
              The work combined product marketing, infrastructure positioning, educational content, and strategic storytelling to help institutional audiences understand how digital asset systems integrate into real-world operational, treasury, trading, governance, and investment workflows. The focus consistently centered on clarity, trust, regulatory alignment, and simplifying complexity without diluting technical sophistication.
            </p>
          </div>

          {/* Google Drive Link */}
          <div className="text-center mb-10">
            <a
              href="https://drive.google.com/drive/folders/166hffHZf2GWonoiyctOyKO0KQDL1WSX9?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300"
            >
              <FolderOpen className="w-5 h-5 text-red-500" />
              <span className="text-white font-medium">Click to view Google Drive folder</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          {/* Document Slideshow */}
          <div className="relative max-w-3xl mx-auto">
            {/* Slide Header */}
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-white mb-2">{documentSlides[currentDocSlide].title}</h4>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">{documentSlides[currentDocSlide].description}</p>
            </div>

            {/* Image Display with Scroll */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div
                className="w-full h-[820px] overflow-y-auto bg-gray-900 cursor-pointer group"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#ef4444 #1f2937",
                }}
                onClick={() => {
                  setFullscreenImage(documentSlides[currentDocSlide].imageUrl)
                  setIsFullscreen(true)
                }}
              >
                <img
                  key={currentDocSlide}
                  src={documentSlides[currentDocSlide].imageUrl}
                  alt={documentSlides[currentDocSlide].title}
                  className="w-full h-auto transition-transform duration-300"
                  style={{ minHeight: "100%", objectFit: "contain" }}
                />
              </div>
              {/* Expand Button */}
              <button
                onClick={() => {
                  setFullscreenImage(documentSlides[currentDocSlide].imageUrl)
                  setIsFullscreen(true)
                }}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 border border-white/20 hover:bg-red-500/20 hover:border-red-400 transition-all duration-300"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">Click image to expand to full screen</p>
              <p className="text-gray-500 text-xs mt-1">Scroll within the image above to view the complete document</p>
            </div>

            {/* Navigation Buttons */}
            {documentSlides.length > 1 && (
              <>
                <button
                  onClick={prevDocSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-white/20 hover:bg-red-500/20 hover:border-red-400 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextDocSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-white/20 hover:bg-red-500/20 hover:border-red-400 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Slide Indicators */}
          {documentSlides.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {documentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDocSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentDocSlide ? "bg-red-500 w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Slide Counter */}
          <div className="text-center mt-4 text-gray-500 text-sm">
            {currentDocSlide + 1} of {documentSlides.length}
          </div>
        </div>

        {/* Fullscreen Modal */}
        {isFullscreen && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-red-500/20 transition-all duration-300 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="max-w-7xl max-h-[90vh] overflow-auto overscroll-contain"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fullscreenImage}
                alt="Fullscreen view"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
