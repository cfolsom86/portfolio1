import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import me from '../../assets/folsom-prism_1.png' 



const Footer = () => {
  return (
    <footer>
      <h1><a href="https://www.folsom-prism.com" className='footer__logo'><img src={me} alt="folsom-prism logo"/></a></h1>

      <ul className='perma__links'>
        <li><a href='#Header'>Header</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.https://www.facebook.com/cliff.folsom/"><BsFacebook /></a>
        <a href="https://www.instagram.com/theonlycliff/"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/cliff-folsom-5b331266/"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Clifton Folsom 2022 - All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer