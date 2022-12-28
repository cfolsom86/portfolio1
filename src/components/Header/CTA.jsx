import React from 'react'
import Resume from '../../assets/cliff-folsom-resume-2022.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={ Resume } download={ Resume } className="btn">My resume</a>
        <a href="#Contact" className="btn btn-primary" >Let's chat</a>
    </div>
  )
}

export default CTA