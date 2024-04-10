import './App.css'
import Navbar from './navbar/navbar'
import HomePage from './HomePage/homepage'
import PaginationSlider from './PagnationSlider/pagnationSlider'

function App() {

  return (
    <div className = "App_container">
        <Navbar/>
        <div>
        <HomePage/>
        <PaginationSlider/>
        </div>
    </div>
  )
}

export default App
