import React from 'react'
import Resume from '../../assets/Resume_2022.txt'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={ Resume } download={ Resume } className="btn">My resume</a>
        <a href="#contact" className="btn btn-primary" >Let's chat</a>
    </div>
  )
}

export default CTA