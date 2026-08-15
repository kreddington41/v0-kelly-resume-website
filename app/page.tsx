import { Hero } from "@/components/hero"
import { SolanaFoundation } from "@/components/solana-foundation"
import { Skills } from "@/components/skills"
import { KrakenInstitutional } from "@/components/kraken-institutional"
import { WisdomTreeOverview } from "@/components/wisdomtree-overview"
import { DataVISShowcase } from "@/components/datavis-showcase"
import { ASOShowcase } from "@/components/aso-showcase"
import { CryptoCopywriting } from "@/components/crypto-copywriting"
import { CaseStudy } from "@/components/case-study"
import { GeoStrategy } from "@/components/geo-strategy"
import { Portfolio } from "@/components/portfolio"
import { MemeShowcase } from "@/components/meme-showcase"
import { WorkSamples } from "@/components/work-samples"
import { Certifications } from "@/components/certifications"
// import { ResumeViewer } from "@/components/resume-viewer"
import { Contact } from "@/components/contact"
// import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <Navigation /> */}
      <Hero />
      <SolanaFoundation />
      <KrakenInstitutional />
      <WisdomTreeOverview />
      <DataVISShowcase />
      <ASOShowcase />
      <CryptoCopywriting />
      <CaseStudy />
      <GeoStrategy />
      <Portfolio />
      <MemeShowcase />
      <WorkSamples />
      <Skills />
      <Certifications />
      {/* <ResumeViewer /> */}
      <Contact />
    </main>
  )
}
