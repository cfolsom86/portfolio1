import React from 'react'
import './Nav.css'
import {FaHouseUser} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookshelf} from 'react-icons/gi'
import {MdOutlineContactless} from 'react-icons/md'
import {BsFillHddNetworkFill} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#header' title="Top" onClick={() => setActiveNav('#Header')} className={activeNav === '#Header' ? 'active' : ''}><FaHouseUser /></a>
      <a href='#about' title="About" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#Experience' title="Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><GiBookshelf /></a>
      <a href='#Portfolio' title="Portfolio" onClick={() => setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}><BsFillHddNetworkFill /></a>
      <a href='#Contact' title="Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><MdOutlineContactless /></a>
      {/*<a href='#Footer' onClick={() => setActiveNav('#Footer')} className={activeNav === '#Footer' ? 'active' : ''}><BiDonateHeart /></a>*/}


    </nav>
  )
}

export default Nav