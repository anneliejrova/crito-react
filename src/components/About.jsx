import React from 'react'
import SquigglyWhite from '../assets/images/squiggly-white.svg'
import SamPhoto from '../assets/images/photo/samantha.png'
import Button from './Button'
import SectionTitle from './SectionTitle'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about">
                <div className="container">

                    <div className="about-img center-content">
                        <img src={SquigglyWhite} className="squiggly-white" alt="squiggly lines" />
                        <img src={SamPhoto} className="sam-photo" alt="Photo of Samatha Brown"/>

                        <div className="founder-txt">
                            <h3>Samantha Brown, <span>Founder</span></h3>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        </div>
                    </div>

                    <div className="about-txt">
                    <div className="section-title">
                        <SectionTitle title="About Company" txt="We Are Business Consulting & Credit Repair Experts" />
                        <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis
                            quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                        </p>
                        <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi
                            incidunt adipisci accusantium libero provident voluptate amet.</p>
                        </div>
                        <div className="about-btns">
                            <Button txt="Learn more" className="btn-dark" url="" />
                            <Link to='/' className="vid">
                                <div className="btn-play"><i className="fa-solid fa-play"></i></div> <span>Intro Video</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default About