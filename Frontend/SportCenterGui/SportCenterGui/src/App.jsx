import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComp from "./Components/Navbar/NavbarComp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContent from "./Components/MainPage/MainContent/MainContent.jsx";
import SportContent from "./Components/MainPage/SportContent/SportContent.jsx";
import LoginForm from "./Components/LoginPage/LoginForm/LoginForm.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
        <BrowserRouter>
            <div className="customBackground d-flex flex-column">

                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/login" element={<LoginForm/>} />

                </Routes>



            </div>
        </BrowserRouter>

  )
}

export default App
