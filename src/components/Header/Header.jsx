import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/cliff_smaller.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="Header">
      <div className="container header_container">
        <h4>Hello, I'm</h4>
        <h1>Cliff Folsom</h1>
        <h5 className='text-light'>A Front End Web Developer</h5>
        
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="Cliff Folsom" />
        </div>

      <a href="#Contact" className="scroll_down">Scroll down</a>
         </div>
  </header>
  )
}

export default Header