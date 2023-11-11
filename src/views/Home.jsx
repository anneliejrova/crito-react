import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Partners from '../components/Partners'


const Home = () => {
  return (
    <div ClassName="wrapper-grid">
        <Header />
        <main>
          <Showcase />
          <Partners />
        </main>
        <footer>
          Foot
        </footer>
    </div>
  )
}

export default Home