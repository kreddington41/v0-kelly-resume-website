import { TrendingUp, Users, ArrowUpRight } from "lucide-react"

export function WisdomTreeOverview() {
  const timeline = [
    {
      role: "Social Media Manager",
      description:
        "Hired to own WisdomTree's social presence, building the voice and content engine that grew the brand's digital footprint.",
    },
    {
      role: "Product Marketing",
      description:
        "Promoted to lead product marketing for WisdomTree Prime and WisdomTree Connect, translating complex digital asset products into clear, compelling go-to-market narratives.",
    },
    {
      role: "Director of Digital Asset Strategy (Responsibilities)",
      description:
        "Assumed the responsibilities of the Director of Digital Asset Strategy after he left for another opportunity \u2014 a rapid advancement driven by deep crypto and GTM expertise.",
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "0 \u2192 70k+",
      label: "Monthly users of WisdomTree Prime",
    },
    {
      icon: TrendingUp,
      value: "0 \u2192 $800M+",
      label: "Assets under management on WisdomTree Connect",
    },
  ]

  return (
    <section id="wisdomtree-overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent leading-tight pb-2">
            WisdomTree
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mt-4 mb-8"></div>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
            My time at WisdomTree is a story of rapid advancement. I was hired as a social media manager, promoted into
            product marketing for WisdomTree Prime and WisdomTree Connect, and ultimately assumed the responsibilities of
            the Director of Digital Asset Strategy when he left for another opportunity.
          </p>
          <p className="text-white font-bold max-w-4xl mx-auto text-lg leading-relaxed mt-4">
            That trajectory was powered by deep crypto and GTM expertise&mdash;the same expertise that helped WisdomTree
            Prime scale from 0 to 70k+ monthly users and WisdomTree Connect grow from 0 to $800M+ in assets under
            management.
          </p>
        </div>

        {/* Promotion Timeline */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && <ArrowUpRight className="w-5 h-5 text-red-500" />}
              </div>
              <h3 className="text-xl font-semibold text-white leading-snug">{item.role}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stat Callouts */}
        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 flex items-center gap-5"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 shrink-0">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent leading-tight">
                  {stat.value}
                </p>
                <p className="text-gray-400 leading-relaxed mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
