import React from 'react';
import './About.css'
import kurt from '../../assets/cliff_1_463x.jpg'
import {MdWorkspacesOutline} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {GiTalk} from 'react-icons/gi'

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
            <a href="#Experience"><h5>Experience</h5></a>
            <small>3 Years</small>
          </article>

          <article className="about__card">
            <FiUsers  className='about__icon'/>
            <h5>Clients</h5>
            <small>Over 50 Clients</small>
          </article>

          <article className="about__card">
            <AiOutlineFundProjectionScreen  className='about__icon'/>
            <a href="#Portfolio"><h5>Projects</h5></a>
            <small>More all the time</small>
          </article>

          <article className="about__card">
            <GiTalk className='about__icon'/>
            <a href='#Contact' ><h5>Let's talk</h5></a>
          </article>
        </div>        
      </div>
      <div className='about__words'>
          <p>Greetings and welcome to my web development portfolio! I'm a dedicated learner on a journey of continuous growth in the realm of digital creation. With a self-directed learning approach spanning the last 2-3 years, I've immersed myself in the art of web development. Throughout this time, I've had the privilege of working on diverse projects, honing my skills and crafting solutions that fuse functionality with aesthetics. My passion for innovation and my commitment to refining my craft drive me to explore new horizons and embrace fresh challenges in the dynamic world of web development. <br/></p>
        </div>
    </section>
  )
}

export default About