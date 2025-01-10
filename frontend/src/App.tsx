import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
        </div>

      </BrowserRouter>
    </HelmetProvider>

  )
}

export default App
