import React from 'react'
import './pagnationSlider.css'
import {sliderInfo} from '../constants/index.js'

 const paginationSlider = () => {
  return (
    <div>
      <h1> Ravo's Classics</h1>
      <div className='movies'>
        {sliderInfo.map((data) => (
          <div className = 'movies_singles' key = {data.id}>
            <img src = {data.image} alt = {data.id}/>
          </div>
        ))}
    </div>
    </div>
  )
}

export default paginationSlider; 
