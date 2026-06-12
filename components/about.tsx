export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">I like the interesting.</h3>
              <div className="space-y-2 text-gray-300 leading-relaxed">
                <p>The outcasts.</p>
                <p>The left-of-centers.</p>
                <p>The loners.</p>
                <p>The rejects.</p>
                <p>The left-curvers.</p>
                <p>The right-curvers.</p>
                <p>The outsiders.</p>
                <p>The eccentric.</p>
                <p>The peculiar.</p>
                <p>The ADHDers.</p>
                <p>The autists.</p>
                <p>The broken.</p>
                <p>The lonely.</p>
                <p>The neurodivergent.</p>
                <p>The free thinkers.</p>
                <p>The traumatized.</p>
                <p>The lost and forgotten.</p>
                <p>They think beyond conventional boundaries because they exist outside them. As keen observers, they step
                back to absorb everything, only to later reemerge with simplified solutions to the complex and answers
                to the seemingly unsolvable.
              </p>
              <h4 className="text-red-400 font-semibold text-lg">The misunderstood create the unforgettable.</h4>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              </div>
            </div>

            
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">What I Do</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm an expert Product, Social Media, and Content marketer passionate about crypto and AI.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I leverage analytics, thought leadership, and viral content to build brands and drive adoption. My
                expertise spans GTM strategy, storytelling, and AI-driven marketing across fintech, crypto, and emerging
                technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Key Achievements</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>6x industry benchmark engagement rate on LinkedIn and X</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Supported startups in raising $40M+ in funding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>1 of 48 selected from 1200+ applicants for Buildspace's Nights and Weekends program</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <span>Led AI tool research and custom GPT development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-red-400">Crypto Native Credentials</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Solidity: Zero to Expert certification</li>
                <li>• Meme connoisseur & crypto culture expert</li>
                <li>• Buildspace alumni (48/1200+ selected)</li>
                <li>• Deep Web3 ecosystem knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
