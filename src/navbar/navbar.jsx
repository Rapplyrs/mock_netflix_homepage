import React from 'react'
import netflix_logo from './Ravocode_logo.png'
import profile_img from './profile_img.png'
import './navbar.css'

const navbar = () => {
  return (
    <div className = "bar_one_container">
      <div className = "navbar">
        <img src = {netflix_logo} alt = 'netflix-logo'/>
        <ul className = "navbar-list">
            <li>
                Home
            </li>
            <li>
                TV Shows
            </li>
            <li>
                Movies
            </li>
            <li>
                News & Popular
            </li>
            <li>
                My List
            </li>
            <li>
                Browse by Languages
            </li>
        </ul>

      </div>
    
      <div className = "sign_on_bar">
        <div className = "item_container">
        <img src = "src/navbar/svg-image-1.svg"  style= {{filter: 'invert(100%)' }} alt = "search"/>          
        </div >
        <div className = "item_container">
          <img src = "src/navbar/svg-image-2.svg"  style= {{filter: 'invert(100%)' }} alt = "notification" />
        </div>
        <div className = "item_container">
          <img src = {profile_img} alt = 'profile_img'/>
        </div>
      </div>  
    </div>  )
}

export default navbar; 
