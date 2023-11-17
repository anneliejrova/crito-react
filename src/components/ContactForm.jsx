<<<<<<< HEAD
import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState ('')
    const [sentMessage, setSentMessage] = useState ('')

    const nameRegex = new RegExp (/^[A-Za-zÅÄÖåäö\s]*$/)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    const form= useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name is required")
                .min(2, "The name must be atleast two letters")
                .matches(nameRegex, "The name may only contain letters"),
            email:  Yup.string()
                .required("E-mail adress is required")
                .email("E-mail must be valid")
                .matches(emailRegex, "invalid e-mail"),
            message: Yup.string()
                .required("Write message here")
                .min(5, "The message needs to consist of atleast 5 characters"),
        }),

        

        onSubmit: async (values) => {
            const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform',{
                method: 'post',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    setSentMessage("Your message was sent! Thank you for writing. We will get back to you as soon as possible.") 
                    form.resetForm()
                    break;
                default:
                    setErrorMessage("Something went wrong! Make sure you filled in every field correctly and try again.")
            }   
        },


        

    })

   
  return (
    <div className="contactform" >
                <div className="container">
                    <div className="top">
                        <div className='center-content'><h3>Leave us a message for any information.</h3> </div> 
                        <div className='center-content'><p className='sentMessage'>{sentMessage}</p></div>
                        <div className='center-content'><p className='errorMessage'>{errorMessage}</p></div>
                        { !form.isValid && form.submitCount > 0 && <div className='center-content'><p className='errorMessage'>Something went wrong! Make sure you filled in every field correctly and try again.</p></div>}
                    </div>
                    

                    <form id="messageForm" onSubmit={form.handleSubmit} noValidate>

                        <div>
                            <label className={form.touched.name && form.errors.name ? 'errors' : 'hidden' } >{form.touched.name && form.errors.name ? form.errors.name : "Name" }</label>
                            <input className="form-input" value={form.values.name} onChange={form.handleChange} name="name" type="text" id="name"  
                            placeholder= "Your Name*"tabIndex="1" onBlur={form.handleBlur} />
                        </div>

                        <div>
                            <label className={form.touched.email && form.errors.email? 'errors' : 'hidden' } >{form.touched.email && form.errors.email ? form.errors.email : "E-mail" }</label>
                            <input className="form-input" value={form.values.email} onChange={form.handleChange} type="email" id="email" name="email"
                                placeholder="Your E-mail*" tabIndex="2" onBlur={form.handleBlur} />
                        </div>

                        <div>
                            <label className={form.touched.message && form.errors.message ? 'errors' : 'hidden' } >{form.touched.message && form.errors.message ? form.errors.message : "Message" }</label>
                            <textarea className="form-input" value={form.values.message} onChange={form.handleChange} name="message" id="message" 
                            placeholder="Your Message*" tabIndex="3" onBlur={form.handleBlur}> </textarea>
                        </div>

                        <div className='center-content'>
                            <button type="submit" className="btn-theme button" tabIndex="4">Send Message</button>
=======
import React from 'react'
import Button from './Button'

const ContactForm = () => {
  return (
    <div className="contactform" >
                <div className="container">
                    <div className="center-content">
                        <h3>Leave us a message for any information.
                        </h3>
                    </div>

                    <form id="messageForm" method="post" noValidate>

                        <div className="mb-3">
                            <label for="Name" className="form-label">Name</label>
                            <input className="form-input" type="text" id="Name" name="Name" title="Name" placeholder="Name*"
                                tabindex="1" />
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">E-mail</label>
                            <input className="form-input" type="email" id="email" name="email" title="email"
                                placeholder="Email*" tabindex="2" />
                        </div>

                        <div className="mb-5">
                            <label for="message" className="form-label">Your Message</label>
                            <textarea name="message" id="message" className="form-input" placeholder="Your Message*"
                                tabindex="3"> </textarea>
                        </div>

                        <div className='center-content'>
                            <Button type="submit" className="btn-theme" tabindex="4" txt="Send Message" />
>>>>>>> 38438c885d959d4292be91c2abd388df2aa9cd7e
                        </div>
                        
                    </form>

                   

                    

                </div>
            </div>
  )
}

export default ContactForm