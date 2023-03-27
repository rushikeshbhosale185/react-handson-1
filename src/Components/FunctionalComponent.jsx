import React from 'react'
import './FunctionalComponent.css'

function FunctionalComponent() {
  return (
    <div className='fn'>
        <h3>This style is created using Functional Component</h3>
        <p style={{color:'red'}}>This is done using Inline CSS</p>
        <p>This is done using External CSS</p>
    </div>
  )
}

export default FunctionalComponent