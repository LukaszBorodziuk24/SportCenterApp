import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComp from "./Components/Navbar/NavbarComp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from "./Components/MainPage/MainContent/MainContent.jsx";
import SportContent from "./Components/MainPage/SportContent/SportContent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className="custom-background">
          <NavbarComp/>
          <div className={"overflow-auto"}>
              <MainContent/>
              <SportContent/>
          </div>

      </div>

  )
}

export default App
