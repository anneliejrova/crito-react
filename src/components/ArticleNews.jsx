import React from 'react'
import SectionTitle from './SectionTitle'
import Article from './Article'
import Button from './Button'
import News1 from '../assets/images/news/news1.png'
import News2 from '../assets/images/news/news2.png'
import News3 from '../assets/images/news/news3.png'


const ArticleNews = () => {
    return (
        <section className="articlenews">
            <div className="container">
                <SectionTitle title="Article & News" txt="Get Every Single Articles & News" />
            

            <div className="news-btn center-content">
            <Button url="/news" className=" btn-transparent" txt="Browse Articles" />
            </div>

            <div className="articles">
                <Article imgUrl={News1} day="25" month="Mar" category="Business" title="How To Use Digitalization In The Classroom" 
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hiclibero." link='/' />
                <Article imgUrl={News2} day="17" month="Mar" category="Business" title="How To Implement Chat GPT In Your Projects" 
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hiclibero." link='/' />
                <Article imgUrl={News3} day="13" month="Mar" category="Business" title="The Guide To Support Modern CSS Design" 
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hiclibero." link='/' />
            </div>
            </div>
        </section>
    )
}

export default ArticleNews

