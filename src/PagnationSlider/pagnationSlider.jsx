import React from 'react'
import { useState, useRef } from 'react'
import './pagnationSlider.css'
import {sliderInfo} from '../constants/index.js'
import backbutton from './Back_Button.png'

 const paginationSlider = () => {



  return (


    <div className="slider-container">
      <div className = "slider">
      {sliderInfo.map((data) => (
                <>
                    <img src = {data.image} alt = {data.id}/>
                  
                </>
              ))}
      </div>
    </div>









    // <div>
    //   <div className = "header">
    //   <h1> Ravo's Classics</h1>
    //     <div className = "pagination">
    //       {[...Array(sliderInfo.length / 6)].map((_, i) => {
    //         return <div key = {i} className ="pagination_item"> </div>
    //       })}
    //     </div>
    //   </div>



    //   <div className='movies'>
    //     <div className = "left">
    //         <img className = "left_slider_image" src = {sliderInfo[leftIndex].image} alt = "Slider Image" />
    //         <div className = "left_overlay" onClick={() => handleLeftButton()}>
    //              <img src= {backbutton} ></img>
    //         </div>
    //       </div>
    //           {sliderInfo.slice(pages*6 - 6, pages*6).map((data) => (
    //             <>
    //               <div className = 'movies_singles' key = {data.id}>
    //                 <img src = {data.image} alt = {data.id}/>
    //               </div>
    //             </>
    //           ))}
    //     <div className = "right">
    //         <img className = "right_slider_image" src = {sliderInfo[rightIndex].image} alt = "Slider Image" />
    //         <div className = "right_overlay" onClick={() => handleRightButton()}>
    //              <img src= {backbutton} ></img>
    //         </div>
    //       </div>


    // </div>
    // </div>
  )
}

export default paginationSlider; 
