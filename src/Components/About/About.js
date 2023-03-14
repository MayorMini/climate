import React from 'react'
import BeachImage from '../../Assets/ChildrenImages.jpg'
import './About.css'

function About() {
  return (
    <div className='MainAboutDiv'>
   <div className='AboutDiv'>
   <div className='img'>
        <img src={BeachImage} alt="Children on the beach" width='500px' height='500px'/>
       </div>
       <div className='AboutText'>
        <h1>ABOUT</h1>
        <p>
 “As you read these, please take into account that numbers,
  names and circumstances have changed a great deal over the past six years, 
  and so have I. Especially at the start, my time championing poor persons biochar
   involved a great deal of repetition of facts well-documented and well-understood by scientists,
    climate change activists and policy-makers in the North, but not yet in the South.
 Today, the whole world seems to be on board the biochar bandwagon and Warm Hearts foundational
  commitments to the climate and the rural poor may be less unique today.
  The rise of Biochar.Life and our connection with some of the best development
   organizations in the world is the result. Perhaps over the next six years,
    I will spend less time writing and more time in the field, 
    delivering the promise of biochar to millions of the worlds poorest people.
  Climate change refers to significant, long-term changes in the global climate
  The global climate is the connected system of sun,
 earth and oceans, wind, rain and snow, forests, deserts and savannas, 
 and everything people do, too. The climate of a place, say New York, can be described as its rainfall, 
 changing temperatures during the year and so on.
But the global climate is more than the “average” of the climates of specific places.


        </p>
       </div>
   </div>
    </div>
  )
}

export default About