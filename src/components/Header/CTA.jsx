import React from 'react'
<<<<<<< HEAD
import Resume from '../../assets/cfolsom_resume_2022.odt'
=======
import Resume from '../../assets/cliff-folsom-resume-2022.pdf'
>>>>>>> 19d688d815984babe35f6fd6187f4dced4ff9843


const CTA = () => {
  return (
    <div className='cta'>
        <a href={ Resume } download={ Resume } className="btn">My resume</a>
        <a href="#Contact" className="btn btn-primary" >Let's chat</a>
    </div>
  )
}

export default CTA