import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pw-gen_41.webp'
import IMG3 from '../../assets/recipe_80.webp'
import IMG4 from '../../assets old/cap_350x.jpg'
//import IMG5 from '../../assets/prism-weather.jpg'
import IMG2 from '../../assets/robot-chef.webp'

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
          <p>Made with React as my first project </p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cfolsom86/pw-gen1" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://idyllic-crumble-55cfda.netlify.app" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>  

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a href="http://www.mastercheef222.com" target="_blank" rel='noopener noreferrer' >
            <img src={IMG2} alt="Cooking with Tech: a blog by Cliff" />
          </a>  
          </div>
          <h3>Cooking with Tech: A Blog About Tech in Restaurants, and some blogs about other things</h3>
          <div className='portfolio__item-cta'>
         {/* <a href="https://github.com/cfolsom86/tic-tac-toe" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://earnest-puffpuff-33c05e.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>*/}
          <a href="http://www.mastercheef222.com" target="_blank" rel="noopener noreferrer" >View Blogs</a>
          </div>
        </article> 

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
         <a href="https://cliffs-eats.netlify.app/" target="_blank" rel='noopener noreferrer'>
            <img src={IMG3} alt="Recipe Search" />
           </a>
          </div>
          <h3>Recipe Card Search</h3>
          <p>Made with React and the Spoonacular API</p>
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
          <p>Built in Shopify, with custom CSS and .liquid</p>
          <a href="https://www.captainpopculture.com" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Go shopping!</a>
          
  </article> 

        {/*<article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <a href="https://prism-weather.netlify.app/" target="_blank" rel='noopener noreferrer'>
            <img src={IMG5} alt="Recipe Search" />
           </a> 
          </div>
          <h3>Weather app</h3>
          <p>React app using OpenWeather API and GeoDB api - I'm still working on this one, especially the mobile version.</p>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cfolsom86/weather" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://prism-weather.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
    </article>*/}

        <small>*More being made all the time*</small>
      </div>
    </section> 
  )
}

export default Portfolio  