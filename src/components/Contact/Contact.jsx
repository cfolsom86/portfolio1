import React, { useRef } from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zetjo2q', 'template_ke5zlna', form.current, 'my9Vlwn0OHXtPlraY')
      e.target.reset()
  };
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
            <h4>Phone</h4>
            <h5>850-228-8601</h5>
            <a href='tel:8502288601' target="_blank" rel="noreferrer">Call or text</a>
          </article>

          <article className='contact__option'>
            <a href='https://m.me/cliff.folsom' target="_blank" rel="noreferrer" className='contact__icon'><RiMessengerLine /></a>
            <h4>Messenger</h4>
            <h5>cliff-folsom</h5>
            <a href='https://m.me/cliff.folsom' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          </div>
          {/*End of Contact Options */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your full name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" rows="16" placeholder="Your message" required />
            <button type="submit" className="btn btn__primary">Send</button>
          </form>
        </div>
    </section>
  )
}

export default Contact