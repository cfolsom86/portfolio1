import React from 'react'
import Resume from '../../assets/Resume-Clifton-Folsom.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={ Resume } target="_blank" rel="noreferrer" className="btn">My resume</a>
        <a href="#Contact" className="btn btn-primary" >Let's chat</a>
    </div>
  )
}

export default CTA