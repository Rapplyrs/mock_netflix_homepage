import './App.css'
import Navbar from './navbar/navbar'
import HomePage from './HomePage/homepage'
import PaginationSlider from './PagnationSlider/pagnationSlider'

function App() {

  return (
    <div className="App_container" style={{ position: 'relative' }}>
        <Navbar  style={{ zIndex: 3 }} />
        <HomePage style={{ zIndex: 1 }} />
        <PaginationSlider style={{ zIndex: 2 }} />
    </div>
  )
}

export default App
