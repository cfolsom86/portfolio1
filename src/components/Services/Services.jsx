import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import './Services.css'

const Services = () => {
  return (
    <section id='Services'>
      <h5>Services</h5>
      <h2>What I have to offer</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX design</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Create products that provide meaningful and enjoyable experiences for users</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Ensure that a product logically flows from one step to the next</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Continuously test and improve products over time to stay relevant</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Constantly develop and improve products or services as needed to make them more user-friendly</p>
            </li>
          </ul>
        </article>

        {/* end of UX/UI card */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Designing user interfaces and navigation menus</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Writing and reviewing code, typically HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Integrating multimedia content onto a site</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon' />
              <p>Updating content to keep your business up to date.</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Keeping track of deadlines, workflow, and budgets</p>
            </li>
          </ul>
        </article>

        {/* end of Dev card */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Consistently creating high-quality content that is useful</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Identify opportunities to add greater value through pieces of content as part of retention and growth strategies</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Create content that flows, makes sense, and looks good on mutiple devices</p>
            </li>
            <li>
              <BsCheckCircleFill className='service__list-icon'/>
              <p>Create products that provide meaningful and enjoyable experiences for users</p>
            </li>
          </ul>
        </article>

          {/* End of content card */}

      </div>
    </section>
  )
}

export default Services