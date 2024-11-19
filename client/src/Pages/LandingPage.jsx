import Footer from "../Components/Footer"
import Hero from "../Components/Helpers/Hero"
import Navbar from "../Components/Navbar"
import WhatWeDo from "../Components/WhatWeDo"
import WhoWeAre from "../Components/WhoWeAre"

function LandingPage() {
  return (
    <div className="">
        <Navbar />
        <div className="mt-[70px]">
            <Hero />
        </div>
        <div className="mt-12 mb-8">
            <WhoWeAre />
        </div>
        <div className="mt-12 mb-8">
            <WhatWeDo />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage