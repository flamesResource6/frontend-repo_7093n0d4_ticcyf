import { useState } from 'react'
import { Github, Linkedin, Mail, X } from 'lucide-react'

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-40 md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute inset-x-3 top-3 rounded-2xl border border-white/10 bg-[#0b0b0f] p-6 shadow-2xl transition-all ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between">
          <span className="text-white/90 font-semibold tracking-tight">apilchand.com</span>
          <button onClick={onClose} className="p-2 rounded-md bg-white/5 text-white/80" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <nav className="mt-4 grid gap-2 text-white/80">
          <a href="#work" onClick={onClose} className="rounded-md px-3 py-2 hover:bg-white/5">Work</a>
          <a href="#about" onClick={onClose} className="rounded-md px-3 py-2 hover:bg-white/5">About</a>
          <a href="#contact" onClick={onClose} className="rounded-md px-3 py-2 hover:bg-white/5">Contact</a>
        </nav>
        <div className="mt-4 flex items-center gap-3">
          <a href="https://github.com" target="_blank" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/80" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/80" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="mailto:hello@apilchand.com" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white/80" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
    </div>
  )
}
