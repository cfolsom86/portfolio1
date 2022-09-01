import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { MdOutlineSell } from 'react-icons/md'
import { GoArrowDown } from 'react-icons/go'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/cliff-folsom-5b331266/" target="_blank" rel="noopener noreferrer" ><BsLinkedin /></a>
        <a href="https://www.captainpopculture.com" target="_blank" rel="noopener noreferrer" ><MdOutlineSell /></a>
        <a href="https://www.github.com/cliff-folsom" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="#Contact" /*className="scroll_down" */><GoArrowDown />></a>
    </div>
  )
}
export default HeaderSocials