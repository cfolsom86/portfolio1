import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pw-gen_41.png'
import IMG3 from '../../assets/recipe_80.jpg'
import IMG4 from '../../assets/cap_350x.jpg'
import IMG5 from '../../assets/prism-weather.jpg'

const Portfolio = () => {
  return (
     <section id='Portfolio'>
      <h5>Portfolio</h5>
      <h2>My recent projects</h2>

       <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a href="https://idyllic-crumble-55cfda.netlify.app" target="_blank" rel='noopener noreferrer'>
            <img src={IMG1} alt="React Password Generator" />
          </a>  
          </div>
          <h3>Password Generator</h3>
          <p>Made with React</p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cfolsom86/pw-gen1" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://idyllic-crumble-55cfda.netlify.app" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>  

       {/*} <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a href="https://earnest-puffpuff-33c05e.netlify.app/" target="_blank" rel='noopener noreferrer' >
            <img src={IMG2} alt="React Tic-Tac-Toe" />
          </a>  
          </div>
          <h3>Tic-tac-toe</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cfolsom86/tic-tac-toe" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://earnest-puffpuff-33c05e.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */} 

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a href="https://cliffs-eats.netlify.app/" target="_blank" rel='noopener noreferrer'>
            <img src={IMG3} alt="Recipe Search" />
           </a> 
          </div>
          <h3>Recipe Card Search</h3>
          <p>Made with React, OpenWeather API and GeoDB api</p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cfolsom86/cliffs-eats" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://cliffs-eats.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>  

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a href="https://www.captainpopculture.com" target="_blank" rel='noopener noreferrer'>
            <img src={IMG4} alt="www.captianpopculture.com" />
          </a>  
          </div>
          <h3>CaptainPopCulture.com</h3>
          <p>Built on Shopify, with custom CSS and Javascript</p>
          <a href="https://www.captainpopculture.com" target="_blank" rel='noopener noreferrer' className='btn'>Go shopping!</a>
          
  </article> 

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a href="https://prism-weather.netlify.app/" target="_blank" rel='noopener noreferrer'>
            <img src={IMG5} alt="Recipe Search" />
           </a> 
          </div>
          <h3>Weather app</h3>
          <p>I'm still working on this one...<br /></p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cfolsom86/weather" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://prism-weather.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <small>*More being made all the time*</small>
      </div>
    </section> 
  )
}

export default Portfolio  