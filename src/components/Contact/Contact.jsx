import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='Contact'>
      <h5>Call, text, email, whatever</h5>
      <h2>Get in touch</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <a href='mailto:cfolsom86@gmail.com' target="_blank" rel="noreferrer" className='contact__icon'><HiOutlineMail /></a>
            <h4>Email</h4>
            <h5>cfolsom86@gmail.com</h5>
            <a href='mailto:cfolsom86@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <a href='tel:8502288601' target="_blank" rel="noreferrer" className='contact__icon'><BsTelephone /></a>
            <h4>Call or text</h4>
            <h5>850-228-8601</h5>
            <a href='tel:8502288601' target="_blank" rel="noreferrer">Call or Text</a>
          </article>

          <article className='contact__option'>
            <a href='https://m.me/cliff.folsom' target="_blank" rel="noreferrer" className='contact__icon'><RiMessengerLine /></a>
            <h4>Messenger</h4>
            <h5>cliff-folsom</h5>
            <a href='https://m.me/cliff.folsom' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          {/*End of Contact Options */}
          <form action="">
            <input type="text" name="name" placeholder="Your full name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" rows="7" placeholder="Your message" required />
            <button type="submit" className="btn btn__primary">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact