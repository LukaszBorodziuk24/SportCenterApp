import {Image} from "react-bootstrap";
import {useState} from "react";
import LeftPentagon from "./LeftPentagon/LeftPentagon.jsx";
import Hourglass from "./Hourglass/Hourglass.jsx";
import RightPentagon from "./RightPentagon/RightPentagon.jsx";
import {useNavigate} from "react-router-dom";

const SportContent = () => {

    const navigate = useNavigate();
    const [hoveredComponent, setHoveredComponent] = useState(null);

    const handleNavigate = (link) =>{
        navigate(link);
    }
    const handleMouseEnter = (component) => {
        setHoveredComponent(component);
    };

    const handleMouseLeave = () => {
        setHoveredComponent(null);
    };

    return(
        <div className={"vh-100 d-flex pt-10"}>
            <LeftPentagon
                isHovered={hoveredComponent === 'left'}
                onMouseEnter={() => handleMouseEnter('left')}
                onMouseLeave={() => handleMouseLeave}
                onNavigate = {() => handleNavigate("/login")}
            />
            <Hourglass
                isHovered={hoveredComponent === 'hourglass'}
                onMouseEnter={() => handleMouseEnter('hourglass')}
                onMouseLeave={() => handleMouseLeave}
                onNavigate = {() => handleNavigate("/login")}
            />
            <RightPentagon
                isHovered={hoveredComponent === 'right'}
                onMouseEnter={() => handleMouseEnter('right')}
                onMouseLeave={() => handleMouseLeave}
                onNavigate = {() => handleNavigate("/login")}
            />
        </div>
    )
}

export default SportContent