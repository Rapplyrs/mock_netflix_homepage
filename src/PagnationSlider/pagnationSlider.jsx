import React from 'react'
import { useState, useRef } from 'react'
import './pagnationSlider.css'
import {sliderInfo} from '../constants/index.js'
import backbutton from './Back_Button.png'
import frontButton from './Front_Button.png'

 const paginationSlider = () => {

const [sliderIndex, setSliderIndex] = useState(0);
const [items, setItems] = useState(6); 
const items_count = sliderInfo.length; 

const progress_bar_count = Math.ceil(items_count / items); 



 const handleLeftButton = () => {

  if (sliderIndex === 0){
    setSliderIndex(prevIndex => progress_bar_count - 1);
  }
  else{

  setSliderIndex(prevIndex => prevIndex - 1);
  }

 } 

 const handleRightButton = () => {

  if (sliderIndex === progress_bar_count - 1){
    setSliderIndex(prevIndex => 0);

  }else {

  
  setSliderIndex(prevIndex => prevIndex + 1);
  }

 }

  return (
    <div className = "row">
      <div className = "header">
        <h3>Ravo's Classics</h3>
        <div className = "progress">
          {
            Array.from({ length: progress_bar_count}, (_, index) => {
              let class_name = ''; // Initialize className variable
              // Conditionally setting className based on index
              if (index === sliderIndex) {
                class_name = 'progress-item active';
              } else {
                class_name = 'progress-item';
              }
               return <div key={index} className = {class_name}></div>
 })
            }
        </div>
      </div>

    <div className="slider-container">
      <button className = "side left-button" onClick = {handleLeftButton}>
        <img src = {backbutton}/>
      </button>
      <div className = "slider" style={{ transform: `translateX(calc(${sliderIndex} * -100%))` }} >
      {sliderInfo.map((data) => (
                <>
                  <img src={data.image} style={{ flex: `0 0 calc(100% / ${items})`, maxWidth: `calc(100% / ${items})` }} alt={data.id} />
                  
                </>
              ))}
      </div>
      <button className = "side right-button" onClick={handleRightButton}>
        <img src = {frontButton}/>
      </button>
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
