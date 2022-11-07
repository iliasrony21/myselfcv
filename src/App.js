import './App.css'
import Contact from './Components/Contact/Contact'
import Info from './Components/Home/Info'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Footer from './Components/Shared/Footer/Footer'
import Navbar from './Components/Shared/Navbar'
import Works from './Components/Works/Works'

function App () {
  return (
    <div>
      <Navbar></Navbar>
      <Info></Info>
      <Services></Services>
      <Works></Works>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
