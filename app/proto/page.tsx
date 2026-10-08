import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prototype | Kelly Reddington",
  description: "A prototype space for Kelly Reddington.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ProtoPage() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.24),transparent_34%),radial-gradient(circle_at_12%_88%,rgba(127,29,29,0.18),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <header className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.22em] text-white/80 uppercase">KR</span>
          <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1.5 text-[10px] font-medium tracking-[0.2em] text-red-300 uppercase">
            Prototype 01
          </span>
        </header>

        <div className="max-w-3xl py-24 sm:py-32">
          <div className="mb-8 flex items-center gap-3 text-xs font-medium tracking-[0.24em] text-red-300 uppercase">
            <span className="h-px w-10 bg-red-500" />
            A work in progress
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-balance sm:text-7xl lg:text-8xl">
            Something new is taking shape.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60 sm:text-xl">
            A private space for exploring ideas at the intersection of technical fluency, narrative clarity, and systems that move work forward.
          </p>
        </div>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>Kelly Reddington</span>
          <span>Not quite ready for the main stage.</span>
        </footer>
      </section>
    </main>
  )
}
