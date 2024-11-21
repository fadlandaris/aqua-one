import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Superiority from '../components/Superiority'
import Whatsapp from '../components/Whatsapp'
import Products from '../components/Products'

const Home = () => {
  return (
    <main className='p-4 ' >
      <Navbar/>
      <Whatsapp/>
      <Hero/>
      <About/>
      <Superiority/>
      {/* <Products/> */}
    </main>
  )
}

export default Home