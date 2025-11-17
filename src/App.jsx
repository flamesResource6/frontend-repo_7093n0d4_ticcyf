import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App
