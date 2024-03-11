import './App.css'
import Navbar from './navbar/navbar'
import HomePage from './HomePage/homepage'
import PaginationSlider from './PagnationSlider/pagnationSlider'

function App() {

  return (
    <div className = "App_container">
        <Navbar/>
        <HomePage/>
        <PaginationSlider/>
    </div>
  )
}

export default App
