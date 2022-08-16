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
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>cfolsom86@gmail.com</h5>
            <a href='mailto:cfolsom86@gmail.com'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsTelephone />
            <h4>Call</h4>
            <h5>850-228-8601</h5>
            <a href='tel:8502288601'>Call or Text</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>cliff-folsom</h5>
            <a href='https://m.me/cliff.folsom'>Send a message</a>
          </article>
          {/*End of Contact Options */}
          <form action=""></form>
        </div>
      </div>
    </section>
  )
}

export default Contact