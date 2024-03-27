import React from 'react'
import { useState } from 'react'
import './pagnationSlider.css'
import {sliderInfo} from '../constants/index.js'
import backbutton from './Back_Button.png'

 const paginationSlider = () => {


  /*
    Need a usestate that keeps track of the current index   

    One function that handles the previous 

    One function that handles the next 

    For the mapping, it needs to be in window sizes of 5 

    When eithier function changes, it rerenders the screen and changes the 5 pictures on display 

    Another key thing we will need is the ability to the images actually slide from left to right when changing the window size



  */

  const [pages, setPages] = useState(1); 

  //Left button index 

  const handleLeftButton = () => {
    setPages(prevPage => {
      if (prevPage === 1){
        return sliderInfo.length/6; 
      }
      else {
        return prevPage - 1; 
      }
    })
    
  }

  //right button index 
  const handleRightButton = () => {
    setPages(prevPage => {
      if (prevPage == 3){
        return 1; 
      }
      else {
        return prevPage + 1; 
      }
    })
  }

  const leftIndex = pages === 1 ? sliderInfo.length - 1 : (pages * 6) - 7; 
  const rightIndex = pages === 3 ? 0 : (pages * 6); 


  return (
    <div>
      <div className = "header">
      <h1> Ravo's Classics</h1>
        <div className = "pagination">
          {[...Array(sliderInfo.length / 6)].map((_, i) => {
            return <div key = {i} className ="pagination_item"> </div>
          })}
        </div>
      </div>



      <div className='movies'>
        <div className = "left">
            <img className = "left_slider_image" src = {sliderInfo[leftIndex].image} alt = "Slider Image" />
            <div className = "left_overlay" onClick={() => handleLeftButton()}>
                 <img src= {backbutton} ></img>
            </div>
          </div>
              {sliderInfo.slice(pages*6 - 6, pages*6).map((data) => (
                <>
                  <div className = 'movies_singles' key = {data.id}>
                    <img src = {data.image} alt = {data.id}/>
                  </div>
                </>
              ))}
        <div className = "right">
            <img className = "right_slider_image" src = {sliderInfo[rightIndex].image} alt = "Slider Image" />
            <div className = "right_overlay" onClick={() => handleRightButton()}>
                 <img src= {backbutton} ></img>
            </div>
          </div>


    </div>
    </div>
  )
}

export default paginationSlider; 
