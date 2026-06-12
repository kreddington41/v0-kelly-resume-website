"use client"

import { FileText, ExternalLink } from "lucide-react"

export function ResumeViewer() {
  return (
    <section id="resume" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">Resume</h3>
                  <p className="text-gray-300">Kelly Reddington</p>
                </div>
              </div>
            </div>

            {/* Canva Embed Container */}
            <div className="p-8">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "129.4118%",
                  paddingBottom: 0,
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  overflow: "hidden",
                  borderRadius: "12px",
                  willChange: "transform",
                }}
              >
                <iframe
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
                  src="https://www.canva.com/design/DAGCiqwnmWA/wOVV_p2Py1HdGIi7_5QI9w/view?embed"
                  allowFullScreen={true}
                  allow="fullscreen"
                />
              </div>

              <div className="text-center mt-6">
                <a
                  href="https://www.canva.com/design/DAGCiqwnmWA/wOVV_p2Py1HdGIi7_5QI9w/view?utm_content=DAGCiqwnmWA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  <span>View Full Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-sm text-gray-400 mt-2">by Kelly Reddington</p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-white/5 text-center">
              <p className="text-gray-400 text-sm">
                Interactive resume powered by Canva • Click expand for fullscreen view • Download directly from viewer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
