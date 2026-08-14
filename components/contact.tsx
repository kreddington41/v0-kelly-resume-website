"use client"

import { Mail, BookOpen, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent leading-tight pb-2">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-white/10">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Substack</p>
                  <a
                    href="https://kellyreddington.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 font-medium hover:text-red-300 transition-colors duration-300"
                  >
                    Read my Substack
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">kreddington41@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">New York</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl border border-white/10">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/kellyreddington"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 font-medium hover:text-red-300 transition-colors duration-300"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">© 2026 Kelly Reddington. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
