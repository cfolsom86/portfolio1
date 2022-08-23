import React from 'react'
import Resume from '../../assets/Resume.txt'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className="btn">My resume</a>
        <a href="#Contact" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA