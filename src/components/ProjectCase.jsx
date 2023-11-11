import React from 'react'
import SectionTitle from './SectionTitle'
import Project from './Project'
import ArticleImg1 from '../assets/images/article1.png'
import ArticleImg2 from '../assets/images/article2.png'
import ArticleImg3 from '../assets/images/article3.png'
import ArticleImg4 from '../assets/images/article4.png'
import Button from './Button'


const ProjectCase = () => {
  return (
    <section className="project-case">
        <div className="container">
            <SectionTitle title="Project & Case Studies" txt="A Look At Our Global Projects" />
                  
            <div className="project-cases">
                <Project url='/' img={ArticleImg1} imgtxt="A mans hands opening a business paper" title="Grow your business" />
                <Project url='/' img={ArticleImg2} imgtxt="Pink apple products on a desk" title="Why your client needs a responsive website" />
                <Project url='/' img={ArticleImg3} imgtxt="Desk with coffee cup and dayplaner" title="Educate your employees to get better result" />
                <Project url='/' img={ArticleImg4} imgtxt="Laptop with Business Intelligence Insights" title="Business Insights is a important piece of your business" />
            </div>
            <div className="center-content">
                <Button url='/' txt="All Recent Projects" className="btn-dark"/>
            </div>
        </div>



    </section>

  )
}

export default ProjectCase