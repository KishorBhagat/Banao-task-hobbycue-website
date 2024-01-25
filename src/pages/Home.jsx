import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import AddPage from "../components/sections/AddPage/AddPage"
import End from "../components/sections/End/End"
import Hero from "../components/sections/Hero/Hero"
import Pages from "../components/sections/Pages/Pages"
import Testimonials from "../components/sections/Testimonials/Testimonials"

function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Pages />
        <AddPage />
        <Testimonials />
        <End />
        <Footer />
    </>
  )
}

export default Home