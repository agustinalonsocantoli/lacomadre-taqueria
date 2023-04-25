// Components
import { Slider } from "./components/Slider"
import { Carta } from "./components/Carta"
// Logo
import logo from "./assets/logoRe.png"
import { Footer } from "./components/Footer"

function App() {

  return (
    <div className="app">

      <div className="logo">
        <img src={logo} alt="img/logo" />
      </div>

      <Slider />
      <Carta />
      <Footer />
    </div>
  )
}

export default App
