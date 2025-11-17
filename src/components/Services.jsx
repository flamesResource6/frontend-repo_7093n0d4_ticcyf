import { Layers, Workflow, Cpu, LayoutGrid, LineChart, Cloud } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Product Engineering',
    desc: 'Ideas to shipped features with fast iterations, QA, and analytics.'
  },
  {
    icon: LayoutGrid,
    title: 'Design Systems',
    desc: 'Accessible components, tokens, and docs for consistent UI at scale.'
  },
  {
    icon: Cpu,
    title: 'APIs & Backends',
    desc: 'Typed APIs, auth, and integrations that are reliable and observable.'
  },
  {
    icon: Cloud,
    title: 'Edge & Infra',
    desc: 'Serverless, caching, and CDNs for global speed and resilience.'
  },
  {
    icon: LineChart,
    title: 'Performance',
    desc: 'Budgets, monitoring, and tuning for Core Web Vitals and runtime speed.'
  },
  {
    icon: Workflow,
    title: 'Process & Enablement',
    desc: 'CI/CD, testing, and team tooling to keep shipping predictable.'
  }
]

export default function Services() {
  return (
    <section className="relative bg-[#0a0a0d] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Services</h2>
          <span className="text-sm text-white/60">What I bring to the table</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/[0.07]">
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-500/10 to-amber-500/10" />
              <div className="relative">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white to-orange-400 text-black/80">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
