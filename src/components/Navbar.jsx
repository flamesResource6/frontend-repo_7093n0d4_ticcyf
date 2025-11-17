import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-amber-600" />
          <span className="text-white/90 font-semibold tracking-tight">apilchand.com</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com" target="_blank" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/80 transition" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/80 transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:hello@apilchand.com" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/80 transition" aria-label="Email"><Mail size={18} /></a>
        </div>
        <button className="md:hidden p-2 rounded-md bg-white/5 text-white/80" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
