import React from 'react'
import Showcase from '../components/Showcase'
import Partners from '../components/Partners'
import Features from '../components/Features'
import About from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import ProjectCase from '../components/ProjectCase'
import TeamTestimonials from '../components/TeamTestimonials'
import ArticleNews from '../components/ArticleNews'
import Newsletter from '../components/Newsletter'


const Home = () => {
  return (
    
        <main>
          <Showcase />
          <Partners />
          <Features />
          <About />
          <Services />
          <WhyUs />
          <ProjectCase />
          <TeamTestimonials />
          <ArticleNews />
          <Newsletter />
        </main>
       
  )
}

export default Home