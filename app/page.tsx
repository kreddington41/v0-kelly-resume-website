import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { KrakenInstitutional } from "@/components/kraken-institutional"
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
      <Skills />
      <KrakenInstitutional />
      <DataVISShowcase />
      <ASOShowcase />
      <CryptoCopywriting />
      <CaseStudy />
      <GeoStrategy />
      <Portfolio />
      <MemeShowcase />
      <WorkSamples />
      <Certifications />
      {/* <ResumeViewer /> */}
      <Contact />
    </main>
  )
}
