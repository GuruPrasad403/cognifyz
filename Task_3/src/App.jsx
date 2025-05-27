import Features from "./components/Features"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/NavBar"
import Accelerate from "./components/Accelerate"
import Pricing from "./components/Priceing"
import Testimonials from "./components/testimonials"
import Footer from "./components/Footer"
function App() {

  return (
    <div className="  bg-black h-screen text-white">
    <Navbar></Navbar>
      <div className="flex flex-col justify-around items-center py-5 my-14  bg-black">
      <HeroSection />
      <Features />
      <Accelerate />
      <Pricing />
      <Testimonials />
      <Footer />
      </div>
     </div>
  )
}

export default App
