export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0d] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Apil Chand. All rights reserved.</p>
        <a href="mailto:hello@apilchand.com" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white/90 hover:bg-white/20 transition">
          Email me
        </a>
      </div>
    </footer>
  )
}
