import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/folsom-prism-PhotoRoom (1).png'
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

       

      <a href="#Contact" className="scroll_down">Scroll down</a>
         </div>
         <div className="me">
          <img src={me} alt="folsom-prism logo" />
        </div>
  </header>
  )
}

export default Header