import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Partners from '../components/Partners'
import Features from '../components/Features'
import About from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'


const Home = () => {
  return (
    <div ClassName="wrapper-grid">
        <Header />
        <main>
          <Showcase />
          <Partners />
          <Features />
          <About />
          <Services />
          <WhyUs />
        </main>
        <footer>
          Foot
        </footer>
    </div>
  )
}

export default Home