import React from 'react'
import './Card.css'

function Card() {

  const funcion = () =>{
    window.location.href ="https://www.youtube.com/watch?v=OVFVOe3AeaI"
  }
  return (
    <div className='button-container'>

	  <button onClick={funcion}>Start</button>
    </div>
      )
    }
      

    

export default Card