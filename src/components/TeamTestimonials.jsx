import React from 'react'
import SectionTitle from './SectionTitle'
import Button from './Button'
import Team from './Team'
import Kristine from '../assets/images/photo/kristine.png'
import Mark from '../assets/images/photo/mark.png'
import Kimberly from '../assets/images/photo/kimberly.png'
import Justin from '../assets/images/photo/justin.png'
import Review from './Review'
import Stars from '../assets/images/stars.svg'
import Amanda from '../assets/images/photo/amanda.png'
import Cassandra from '../assets/images/photo/cassandra.png'
import Jack from '../assets/images/photo/jack.png'

const TeamTestimonials = () => {
  return (
    <div className="teamtestimonial">
                <div className="container">
                    <div className="team">
                        <SectionTitle title="Meet Our Team" txt="Experience Team Members" />
                      
                        <div className="center-content">
                            <Button url='/' txt="Browse Team" className="btn-theme" />
                        </div>

                        <div className="team-mbrs">

                            <Team photo={Kristine} phototxt="Photo of Kristine Palmer" name="Kristine Palmer" title="Chef Operation Officer" />
                            <Team photo={Mark} phototxt="Photo of Mark Aubri" name="Mark Aubri" title="Senior Consultant" />
                            <Team photo={Kimberly} phototxt="Photo of Kimberly Hansen" name="Kimberly Hansen" title="Senior Consultant" />
                            <Team photo={Justin} phototxt="Photo of Justin Willoman" name="Justin Willoman" title="Senior Tech Consultant" />
                        </div>
                    </div>

                    <div className="testimonial center-content">
                        <SectionTitle title="Testimonial" txt="What Our Clients Say" />

                        <div className="reviews">

                            <Review txt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate" img={Stars} imgtxt="star grading 5" photo={Cassandra} phototxt="Photo of Cassandra Warren, Business Manager, Dorfus" 
                                name="Cassandra Warren" title="Business Manager, Dorfu" />

                            <Review txt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate" img={Stars} imgtxt="star grading 5" photo={Amanda} phototxt="Photo of Amanda Tulling, Senior Developer, Square" 
                                name="Amanda Tulling" title="Senior Developer, Square" />

                            <Review txt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate" img={Stars} imgtxt="star grading 5" photo={Jack} phototxt="Photo of Jack McDogglas, Key Account Manager, Gobona" 
                                name="Jack McDogglas" title="Key Account Manager, Gobona" />     

                        </div>
                        <div className="testimonial-btn">
                            <Button url='/' className="btn-dark" txt="All Reviews" />
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default TeamTestimonials