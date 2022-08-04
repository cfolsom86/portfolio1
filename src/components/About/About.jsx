import React from 'react';
import './About.css'
import kurt from '../../assets/kurt.jpg'
import {MdWorkspacesOutline} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>About</h5>
      <h2>Get to know me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={kurt} alt="Cliff Folsom" />
            </div>
        </div>

        <div className=" about__container">
          <article className="about__card">
            <MdWorkspacesOutline  className='about__icon'/>
            <h5>Experience</h5>
            <small>2 Years</small>
          </article>

          <article className="about__card">
            <FiUsers  className='about__icon'/>
            <h5>Clients</h5>
            <small>Over 50 Clients</small>
          </article>

          <article className="about__card">
            <AiOutlineFundProjectionScreen  className='about__icon'/>
            <h5>Projects</h5>
            <small>More all the time</small>
          </article>
        </div>

        <p>I am always a student, but am currently working at DECODE Advertising, a digital marketing company in Houston. I am self-taught, spending the last 2-3 years perfecting the art of development. Some of the work I've done has been for National clients, such as St. Luke's Health, Dignity Health, White Deer Energy, and CaptainPopCulture. I am always looking for more to learn and finding new ways to grow. </p>

        <a href='#Contact' className='btn btn-primary'>Let's talk</a>
      </div>
    </section>
  )
}

export default About