import React, { Component } from 'react'
import './ClassComponent.css'

export class ClassComponent extends Component {
  render() {
    return (
      <div className='cls'>
        <h3>This style is created using Class Component</h3>
        <p style={{color:'red'}}>This is done using Inline CSS</p>
        <p>This is done using External CSS</p>
      </div>
    )
  }
}

export default ClassComponent