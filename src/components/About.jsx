import { CheckCircle2, Globe2, ShieldCheck, Zap } from 'lucide-react'

const bullets = [
  {
    icon: Zap,
    title: 'Velocity with quality',
    desc: 'Lean delivery with strong foundations: types, tests, analytics, and CI/CD.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliability at scale',
    desc: 'Resilient systems, observability, and performance budgets baked in.'
  },
  {
    icon: Globe2,
    title: 'Global reach',
    desc: 'Edge-first architectures for fast, international experiences.'
  },
  {
    icon: CheckCircle2,
    title: 'Design systems',
    desc: 'Tokens, components, and motion that express your brand consistently.'
  }
]

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0f] py-24">
      {/* subtle gradient top border */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-white to-orange-400" />
              About
            </span>
            <h2 className="mt-5 text-2xl md:text-4xl font-semibold text-white">
              I help fintech and travel companies craft fast, delightful products.
            </h2>
            <p className="mt-4 text-white/70 max-w-prose">
              From interactive frontends to reliable backends, my focus is on shipping polished experiences. I blend design thinking with engineering discipline so teams can move quickly without sacrificing quality.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bullets.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.07]">
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-white to-orange-400 text-black/80">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-white font-medium">{title}</h3>
                  <p className="text-sm text-white/70 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/10 to-amber-500/10 blur-2xl" />
            <div className="relative">
              <div className="rounded-xl border border-white/10 bg-[#0a0a0d] p-5">
                <p className="text-white/80 text-sm">Capabilities</p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
                  <li className="rounded-md bg-white/5 px-3 py-2">Product engineering</li>
                  <li className="rounded-md bg-white/5 px-3 py-2">Design systems</li>
                  <li className="rounded-md bg-white/5 px-3 py-2">Performance</li>
                  <li className="rounded-md bg-white/5 px-3 py-2">APIs & integrations</li>
                  <li className="rounded-md bg-white/5 px-3 py-2">Data & analytics</li>
                  <li className="rounded-md bg-white/5 px-3 py-2">Animation & 3D</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
