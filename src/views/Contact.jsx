import React from 'react'
import PageTitle from '../components/PageTitle'
import ContactUs from '../components/ContactUs'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'

const Contact = () => {
  return (
 
      <main>
        <PageTitle title="Contact" currentUrl='/contact' currentPage='Contact' />
        <ContactUs />
        <ContactForm />
        <Map />
      </main>
  )
}

export default Contact
