import React from 'react'
import PageTitle from '../components/PageTitle'
import ContactUs from '../components/ContactUs'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
 
      <main>
        <PageTitle title="Contact" currentUrl='/contact' currentPage='Contact' />
        <ContactUs />
        <ContactForm />

        <div className='center-content'><br /> <br /> <br /> <br /><b>Add Mapp here! </b><br /> <br /><br /> <br /></div>
        </main>
  )
}

export default Contact
