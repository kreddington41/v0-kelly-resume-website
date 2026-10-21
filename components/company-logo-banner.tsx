const companies = [
  { name: "Sentient Science", src: "/companies/sentient-science.png", className: "w-44 sm:w-52" },
  { name: "Snapchat", src: "/companies/snapchat.png", className: "w-16 sm:w-20" },
  { name: "Aave", src: "/companies/aave.png", className: "w-28 sm:w-36" },
  { name: "Coinbase", src: "/companies/coinbase.png", className: "w-32 sm:w-40" },
  { name: "GitLab", src: "/companies/gitlab.png", className: "w-36 sm:w-44" },
  { name: "ACV Auctions", src: "/companies/acv-auctions.png", className: "w-32 sm:w-40" },
  { name: "WisdomTree", src: "/companies/wisdomtree.png", className: "w-36 sm:w-44" },
  { name: "Chainlink Labs", src: "/companies/chainlink-labs.png", className: "w-44 sm:w-52" },
  { name: "Kraken", src: "/companies/kraken.png", className: "w-36 sm:w-44" },
]

export function CompanyLogoBanner() {
  return (
    <section aria-label="Companies Kelly has worked with" className="border-y border-white/10 bg-white/[0.02] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
          Selected clients and collaborators
        </p>
        <div className="relative overflow-hidden" aria-label="Company logos marquee">
          <div className="company-logo-marquee flex w-max items-center gap-x-10 sm:gap-x-16">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex h-14 shrink-0 items-center justify-center opacity-75 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:h-16"
              >
                <img
                  src={company.src}
                  alt={index >= companies.length ? "" : company.name}
                  className={`${company.className} max-h-14 object-contain sm:max-h-16`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
