/* eslint-disable no-unused-vars */
import React from 'react'

const Contact = () => {
  return (
    <section className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center'>Contact Us</h2>
      <p className='mb-8 lg:mb-16 font-light text-center text-para'>
        Got a technical issue? Want to send feedback about a beta feature? Let us know.
      </p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form_lable'>Your Email</label>
          <input type="email" id='email' placeholder='example@gmail.com' className='form_input mt-1' />
        </div>
        <div>
          <label htmlFor="subject" className='form_lable'>Subject</label>
          <input type="text" id='subject' placeholder='Let us know how we can help you' className='form_input mt-1' />
        </div>
        <div className='sm:col-span-2'>
          <label htmlFor="message" className='form_lable'>Your Message</label>
          <textarea rows='6' type="text" id='message' placeholder='Leave a comment.....' className='form_input mt-1' />
        </div>
        <button type='submit' className='btn rounded sm:w-fit'>Submit</button> 
      </form>
    </section>
  )
}

export default Contact