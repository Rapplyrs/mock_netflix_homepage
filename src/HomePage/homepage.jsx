import React from 'react'
import backgroundImg from './gift_img.webp'
import titleImg from './The_Gift_ttl.webp' 
import './homepage.css'

const homepage = () => {
  return (

    <div className = "homepage-container">
        <div className = "img-container">
            
            <img src = {backgroundImg} alt = "img_background" className = "img_background"/>

        </div>
        <div className = "info-container">
                <img src = {titleImg} alt = "title_img"/>
                <div className = "movie_ranking_header">
                  <img src = "src/HomePage/svg-image-4.png" alt = "movie_ranking"/>
                  <h1> #2 in Movies Today</h1>
                </div>
                  <p>This movie is about some couple who is lowkey seemingly terrorized by some stranger 
                     but it turns out that the husband is a big bully smh </p>
                <div className = "select_options">
                    <div className = "play_button_container">
                      <div className ="items_1">
                        <img src = "src/HomePage/svg-image-5.png" alt = "play_buttn"/>
                        <h1>Play</h1>
                      </div>
                    </div>
                    <div className = "more_info_container">
                      <div className='items_2'>
                        <img src = "src/HomePage/svg-image-6.png" alt = "more_info"/>
                        <h1>More info</h1>
                      </div>
                    </div>  
                </div>
          </div>
    </div>
  )
}

export default homepage; 
