"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  TrendingUp,
  Target,
  Search,
  BarChart3,
  Zap,
  FileText,
  Maximize2,
  X,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function ASOShowcase() {
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
      title: "App Store Optimization Strategy",
      subtitle: "Driving Organic Growth Through Strategic ASO",
      icon: <Smartphone className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-4">WisdomTree Prime App Store</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Led comprehensive App Store Optimization strategy across Apple App Store and Google Play, driving
              significant organic growth through data-driven keyword optimization and strategic positioning.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Managed complete app store presence including custom promotional campaigns, localized listings, and
              cross-functional collaboration with Design, Product, Legal, and Compliance to ensure regulatory compliance
              while maximizing discoverability.
            </p>

            {/* App Store Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/wisdomtree-prime/id1620597330"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span>View on App Store</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wisdomtree.wtprime"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <span>View on Google Play</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* App Store Screenshots Grid */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-4">Featured App Store Creative Assets</h4>
              <div className="space-y-4">
                <div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    openFullscreen(
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qIpcIRFnljbiXBdLmcFFZECC2y1I0B.png",
                    )
                  }
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qIpcIRFnljbiXBdLmcFFZECC2y1I0B.png"
                    alt="WisdomTree Prime App Store Screenshots - Earlier Version: $100 Bitcoin Rewards, Portfolio Dashboard, Cross-Chain Transfers, and Digital Assets Access"
                    className="w-full rounded-lg shadow-lg border border-white/10 transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Expand overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                    <div className="bg-red-500 text-white p-3 rounded-full">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div
                  className="relative cursor-pointer group"
                  onClick={() =>
                    openFullscreen(
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Iu85APeD1QWR8Rc4WhookCKMtpgvm.png",
                    )
                  }
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7Iu85APeD1QWR8Rc4WhookCKMtpgvm.png"
                    alt="WisdomTree Prime App Store Screenshots - Latest Version: Onchain Gold Features, Paycheck Conversion Tools, Account Security Setup, and Enhanced UI"
                    className="w-full rounded-lg shadow-lg border border-white/10 transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Expand overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                    <div className="bg-red-500 text-white p-3 rounded-full">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm mb-2">Click images to expand to full screen</p>
                <p className="text-gray-500 text-xs">
                  Showing the evolution of app store creative assets from earlier campaigns to current messaging
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">#1 Rankings</div>
              <div className="text-gray-300 text-sm">Multiple target keywords</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Organic Growth</div>
              <div className="text-gray-300 text-sm">Boosted downloads significantly</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Cross-Platform</div>
              <div className="text-gray-300 text-sm">iOS & Android optimization</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Keyword Strategy & Research",
      subtitle: "Data-Driven Keyword Optimization",
      icon: <Search className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Strategic Keyword Research & Optimization</h3>
            <p className="text-gray-300 mb-4">
              Leveraged AppTweak and similar ASO tools for comprehensive competitor analysis, keyword discovery, and
              performance tracking to achieve #1 rankings for multiple target keywords.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Research & Discovery</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Competitor analysis using AppTweak</li>
                <li>• High-value keyword identification</li>
                <li>• Search volume & difficulty monitoring</li>
                <li>• Market trend analysis</li>
                <li>• Opportunity gap identification</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Implementation & Results</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Achieved #1 rankings for target keywords</li>
                <li>• Continuous refinement over time</li>
                <li>• Performance tracking & iteration</li>
                <li>• Keyword ranking improvements</li>
                <li>• Organic download growth</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Key Focus Areas</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong>Crypto & DeFi Keywords:</strong> Targeting crypto-native audience with relevant financial terms
              </div>
              <div>
                <strong>Traditional Finance:</strong> Bridging TradFi users to digital asset investing
              </div>
              <div>
                <strong>Gold Investment:</strong> Capturing precious metals investment searches
              </div>
              <div>
                <strong>Digital Payments:</strong> Visa debit card and spending functionality
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Metadata & Localization Optimization",
      subtitle: "Global Reach Through Strategic Optimization",
      icon: <Target className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Comprehensive Metadata Strategy</h3>
            <p className="text-gray-300 mb-4">
              Optimized app titles, subtitles, tags, and categories to maximize search visibility and alignment with app
              store algorithms while ensuring global reach through localization.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Metadata Optimization</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">App Store Elements</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• App titles & subtitles</li>
                    <li>• Keyword tags optimization</li>
                    <li>• Category selection strategy</li>
                    <li>• Algorithm alignment</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Search Visibility</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Maximum discoverability</li>
                    <li>• Relevant keyword placement</li>
                    <li>• Competitive positioning</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">US Market Focus</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">US Market Optimization</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• US market optimization</li>
                    <li>• Domestic keyword targeting</li>
                    <li>• American audience preferences</li>
                    <li>• US regulatory compliance</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Conversion Optimization</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Improved US conversions</li>
                    <li>• Enhanced domestic reach</li>
                    <li>• US market-specific messaging</li>
                    <li>• US regulatory compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Strategic Impact</h4>
            <p className="text-gray-300 text-sm">
              Comprehensive metadata and localization strategy resulted in improved search rankings, enhanced US market
              penetration, and increased organic downloads domestically.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Visual Asset Optimization & A/B Testing",
      subtitle: "Data-Driven Creative Optimization",
      icon: <BarChart3 className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Creative Asset Strategy & Testing</h3>
            <p className="text-gray-300 mb-4">
              Designed and refined screenshots, icons, and feature graphics through systematic A/B testing to maximize
              click-throughs and installs while maintaining consistent branding across all channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Visual Asset Optimization</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Screenshot design & refinement</li>
                <li>• App icon optimization</li>
                <li>• Feature graphic creation</li>
                <li>• Consistent brand alignment</li>
                <li>• Cross-channel consistency</li>
                <li>• Click-through maximization</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">A/B Testing Framework</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Copy variations testing</li>
                <li>• Screenshot experiments</li>
                <li>• Icon performance analysis</li>
                <li>• Feature graphic optimization</li>
                <li>• Conversion rate tracking</li>
                <li>• Statistical significance validation</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Creative Asset Categories</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-red-400 font-bold mb-1">Gold Investment</div>
                <div className="text-gray-300">Onchain gold token features and pricing</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-red-400 font-bold mb-1">Crypto Features</div>
                <div className="text-gray-300">Bitcoin rewards and crypto functionality</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-red-400 font-bold mb-1">Financial Tools</div>
                <div className="text-gray-300">Dashboard, cross-chain, and Visa card</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Testing Results</h4>
            <p className="text-gray-300 text-sm">
              Systematic A/B testing of creative assets led to improved conversion rates, higher install rates, and
              better overall app store performance through data-driven optimization.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Crypto-Native App Store Description",
      subtitle: "Regulatory-Compliant Copy Within Strict Length Restrictions",
      icon: <FileText className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Strategic Copy Optimization</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Crafted crypto-native app store descriptions that clearly and concisely convey the app's features and
              functionality while adhering to strict regulatory guardrails and app store copy length restrictions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Balanced authentic Web3 terminology with FINRA/SEC compliance requirements, ensuring maximum
              discoverability without compromising regulatory standards or exceeding character limits.
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
                onClick={() =>
                  openFullscreen(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000017568.jpg-fTzP0rlIl0P1Em9764qH6SvsjJLMZQ.jpeg",
                  )
                }
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000017568.jpg-fTzP0rlIl0P1Em9764qH6SvsjJLMZQ.jpeg"
                  alt="WisdomTree Prime App Store Description - Complete listing with optimized copy, features, and metadata"
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
                Scroll within the image above to view the complete app store description
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Regulatory</div>
              <div className="text-gray-300 text-sm">FINRA/SEC compliant copy</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Crypto-Native</div>
              <div className="text-gray-300 text-sm">Authentic Web3 terminology</div>
            </div>
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20 text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">Optimized</div>
              <div className="text-gray-300 text-sm">Maximum character efficiency</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Custom Promotional Campaigns",
      subtitle: "Targeted Campaign-Specific Listings",
      icon: <Zap className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-red-400 mb-4">Campaign-Specific Store Optimization</h3>
            <p className="text-gray-300 mb-4">
              Created custom promotional store pages tailored for specific audiences and campaigns, integrating with
              broader marketing strategy across social media, email, and web for a unified user journey.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Custom Promotional Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">Campaign Types</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Bitcoin reward promotions</li>
                    <li>• Gold investment campaigns</li>
                    <li>• Visa debit card launches</li>
                    <li>• Cross-chain feature highlights</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Audience Targeting</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Crypto-native users</li>
                    <li>• Traditional investors</li>
                    <li>• Gold investment enthusiasts</li>
                    <li>• Digital payment adopters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Cross-Functional Integration</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-white font-medium mb-2">Team Collaboration</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Design team coordination</li>
                    <li>• Product team alignment</li>
                    <li>• Compliance team approval</li>
                    <li>• Marketing campaign integration</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Brand Standards</h5>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Regulatory compliance (FINRA, SEC)</li>
                    <li>• Brand consistency</li>
                    <li>• Legal review process</li>
                    <li>• Risk management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Unified Marketing Strategy</h4>
            <p className="text-gray-300 text-sm">
              Aligned app store content with campaigns across social media, email, and web to create a seamless user
              journey from discovery to download and activation.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Performance Tracking & Results",
      subtitle: "Data-Driven Success Metrics",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Measurable ASO Success</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Comprehensive performance tracking and iterative improvements resulted in significant organic growth,
              improved conversion rates, and elevated overall app visibility across both iOS and Android platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Key Performance Metrics</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Keyword ranking improvements</li>
                <li>• Conversion rate optimization</li>
                <li>• Install lift analysis</li>
                <li>• Organic download growth</li>
                <li>• App visibility enhancement</li>
                <li>• User acquisition cost reduction</li>
              </ul>
            </div>

            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h4 className="text-lg font-bold text-red-400 mb-3">Strategic Outcomes</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• #1 rankings for multiple target keywords</li>
                <li>• Boosted organic downloads significantly</li>
                <li>• Improved conversion rates</li>
                <li>• Enhanced brand visibility</li>
                <li>• Enhanced US market presence</li>
                <li>• Reduced customer acquisition costs</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Continuous Optimization Process</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <strong>Monitor:</strong> Track keyword rankings, conversion rates, and competitor movements
                </div>
                <div>
                  <strong>Analyze:</strong> Identify optimization opportunities and performance gaps
                </div>
                <div>
                  <strong>Iterate:</strong> Implement improvements and measure impact
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Reputation Management</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <strong>User Feedback:</strong> Prompt responses to reviews and ratings
                </div>
                <div>
                  <strong>Brand Protection:</strong> Proactive reputation management
                </div>
                <div>
                  <strong>Review Strategy:</strong> Encouraging positive user reviews
                </div>
                <div>
                  <strong>Issue Resolution:</strong> Quick response to user concerns
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-white/10 text-center">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Strategic Impact Summary</h4>
            <p className="text-gray-300 text-sm mb-4">
              The comprehensive ASO strategy delivered measurable results: achieved #1 keyword rankings, significantly
              boosted organic downloads, improved conversion rates, and established WisdomTree Prime as a leading
              fintech app in the digital asset space.
            </p>

            {/* App Store Links in Results Section */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://apps.apple.com/us/app/wisdomtree-prime/id1620597330"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span>App Store</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.wisdomtree.wtprime"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <span>Google Play</span>
                <ExternalLink className="w-3 h-3" />
              </a>
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
      <section id="aso-showcase" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
              App Store Optimization
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Strategic ASO management for WisdomTree Prime across iOS and Android, driving organic growth through
              data-driven optimization and creative excellence
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
