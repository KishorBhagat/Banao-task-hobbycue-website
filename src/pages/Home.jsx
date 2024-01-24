import Header from "../components/header/Header"
import AddPage from "../components/sections/AddPage/AddPage"
import Hero from "../components/sections/Hero/Hero"
import Pages from "../components/sections/Pages/Pages"

function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Pages />
        <AddPage />
    </>
  )
}

export default Home