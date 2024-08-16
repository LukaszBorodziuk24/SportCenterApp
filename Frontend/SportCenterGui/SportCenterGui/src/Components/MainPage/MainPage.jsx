import MainContent from "./MainContent/MainContent.jsx";
import SportContent from "./SportContent/SportContent.jsx";
import {Navbar} from "react-bootstrap";
import NavbarComp from "../Navbar/NavbarComp.jsx";


const MainPage = () =>{
    return(
        <div>
            <NavbarComp/>
            <div className={"overflow-auto container-fluid p-0"}>
                <MainContent/>
                <SportContent/>
            </div>
        </div>

    )
}

export default MainPage