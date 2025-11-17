import { Code2, Rocket, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Code2,
    title: 'Engineering',
    desc: 'Full‑stack systems with clean architecture, testing, and observability.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    desc: 'Ship fast experiences: SSR, caching, edge, and accessible motion.'
  },
  {
    icon: Sparkles,
    title: 'Design',
    desc: 'Polished UI with design systems, tokens, and thoughtful micro‑interactions.'
  }
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-[#0a0a0d] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected focus</h2>
          <a href="#contact" className="text-sm text-orange-400 hover:text-orange-300">Let’s collaborate</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/[0.07]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white to-orange-400 text-black/80">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
