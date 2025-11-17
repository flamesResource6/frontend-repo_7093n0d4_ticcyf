import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay to increase contrast - pointer-events-none per Spline guidance */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-white to-orange-400" />
            Fintech • Travel • Interactive
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.1] text-white">
            Building delightful, high-performance digital products.
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl">
            I craft robust frontends and scalable backends with a focus on modern UX, motion, and reliability.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 px-5 py-3 text-white shadow-lg shadow-orange-500/20 transition hover:shadow-orange-500/30">
              See my work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white/90 hover:bg-white/20 transition">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
