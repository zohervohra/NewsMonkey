import React, { Component } from 'react'
import spinner from './spinner.gif'
export default class  extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={spinner} alt="loading"  />
      </div>
    )
  }
}
