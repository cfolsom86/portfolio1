import React from 'react'
import Resume from '../../assets/Resume_2022.txt'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className="btn">My resume</a>
        <a href='#Contact' target="#Contact" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA