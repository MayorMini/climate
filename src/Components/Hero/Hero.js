import React from 'react'
import BackgroundVideo from '../../Assets/istockphoto-1185163419-640_adpp_is.mp4'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'> 
    <div className='overlay'></div>
        <video autoPlay loop muted className='video'>
        <source src={BackgroundVideo} type='video/mp4'/>
        </video>
     
        
      <div className='Text'>
        <h1 className='Save'> 
            Save Our Planet
        </h1>
        <p className='climateDes'> 
        Climate change is the most severe problem that we are facing today,
         more serious even than the threat of terrorism. A nation that destroys its soils destroys itself.
         Forests are the lungs of our land, purifying the air and giving fresh strength to our people.
          Together we can save Mother Earth...
        </p>

        <button className='Download'> Download Report</button>
      </div>
    </div>
  )
}

export default Hero