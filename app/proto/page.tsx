import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "AI Work | Kelly Reddington",
  description: "AI video and image work by Kelly Reddington.",
  robots: {
    index: false,
    follow: false,
  },
}

const footerYear = new Date().getFullYear()

export default function ProtoPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_8%,rgba(220,38,38,0.2),transparent_32%),radial-gradient(circle_at_8%_55%,rgba(127,29,29,0.14),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <header className="flex items-center justify-between">
          <span className="text-lg font-semibold tracking-[-0.03em] text-red-500">Kelly Reddington</span>
          <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-[10px] font-medium tracking-[0.2em] text-red-300 uppercase">
            AI work / prototype
          </span>
        </header>

        <section className="max-w-4xl py-8 sm:py-12">
          <div className="mb-8 flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-red-300 uppercase">
            <span className="h-px w-10 bg-red-500" />
            Specifically created for Proto
          </div>
          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl">
            AI video and image work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
            An evolving collection of experiments, campaigns, and visual systems built with AI as part of the creative workflow.
          </p>
        </section>

        <section className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">Featured work</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Kraken animation concept</h2>
              </div>
              <a
                href="https://x.com/krakenfx/status/2049881465811251663?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 transition-colors hover:text-red-400"
              >
                View post
              </a>
            </div>
            <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl bg-black px-4 py-8">
              <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
                <a href="https://x.com/krakenfx/status/2049881465811251663?s=20">View this post on X</a>
              </blockquote>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">Workflow note</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">AI as the storyboard room.</h2>
              <p className="mt-5 leading-8 text-white/60">
                I used Google Veo to ideate and storyboard this entire animation. However, the voiceover work was done by an external agency so it didn&apos;t have that “AI voice” that was so prevalent in all the AI voice tools at the time.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">AI influencer concept</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Stablecoin Steph</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/60">
                A quirky, smart NYC vlogger archetype who explains stablecoin trends in a fun, approachable way.
              </p>
              <div className="mt-8 border-l border-red-500/50 pl-5 text-sm leading-7 text-white/55">
                <p>
                  The workflow: define the character archetype, use ChatGPT to create a transparent PNG watermark, and iterate through Veo 3 prompting to solve the challenge of maintaining character consistency with enough specificity.
                </p>
                <p className="mt-4">
                  Usable clips were pulled into CapCut, where its built-in Captions feature handled subtitles. Rudimentary text boxes were added, the watermark was dragged into place, and the finished video was exported.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-red-950/20">
              <div className="min-h-[399px] w-full">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7338001845077843968?compact=1"
                  title="Stablecoin Steph video on LinkedIn"
                  className="h-[399px] w-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What the Proto founders will be driving soon</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/60">
                I used Midjourney to generate the initial Lamborghini, aligned with Proto&apos;s brand using its X profile photo, then took that generation into Omni for rapid, cost-efficient iteration.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-red-950/20">
              <div className="aspect-[9/16] w-full sm:aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/bnASAZcV_UI"
                  title="Proto Lambo AI video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Higgsfield generated AI UGC sample</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-red-950/20">
              <div className="aspect-[9/16] w-full sm:aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/mUDl8Cmb61s"
                  title="Higgsfield generated AI UGC sample"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">AI UGC concept</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Threadguy AI UGC video</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/60">
                This upper/lower trading-format video is a strong template for an AI UGC army featuring Proto&apos;s platform — and it can take a Kalshi-style approach as well.
              </p>
              <div className="mt-8 space-y-4 border-l border-red-500/50 pl-5 text-sm leading-7 text-white/55">
                <p>
                  The neon lights in the background could be cleaned up with further generations or a targeted overlay in post.
                </p>
                <p>
                  I left the repeated “reality” beat in place intentionally: the imperfection helps sell the realism of the format.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-red-950/20">
              <div className="aspect-[9/16] w-full sm:aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/GsJ_jBMRon4"
                  title="Threadguy AI UGC video"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">© {footerYear} Kelly Reddington. All rights reserved.</p>
        </footer>
      </div>

      <Script src="https://platform.twitter.com/widgets.js" strategy="afterInteractive" />
    </main>
  )
}
