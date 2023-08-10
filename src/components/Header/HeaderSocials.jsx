import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { MdOutlineSell } from 'react-icons/md'
import { GoArrowDown } from 'react-icons/go'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/cliff-folsom-5b331266/" target="_blank" rel="noopener noreferrer" alt="Cliff's LinkedIn" title="Cliff's LinkedIn"><BsLinkedin /></a>
        <a href="https://www.github.com/cliff-folsom" target="_blank" rel="noopener noreferrer" alt="Cliff's Github" title="Cliff's Github"><BsGithub /></a>
        <a href="https://www.captainpopculture.com" target="_blank" rel="noopener noreferrer" alt="CaptainPopCulture" title="CaptainPopCulture"><MdOutlineSell /></a>
        <a href="#Contact" alt="Contact" title="Scroll Down"><GoArrowDown /></a>
    </div>
  )
}
export default HeaderSocials