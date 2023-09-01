import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Elevate from './components/Elevate/Elevate'
import Videos from './components/Videos/Videos'
import Place from './components/Place/Place'
import Teachers from './components/Teachers/Teachers'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <main>
     <Navbar/>
     <Hero/>
     <Category/>
     {/* <Elevate/> */}
     {/* <Videos/> */}
     {/* <Place/> */}
     {/* <Teachers/> */}
     {/* <Team/> */}
     {/* <Footer/> */}
    </main>
  )
}
