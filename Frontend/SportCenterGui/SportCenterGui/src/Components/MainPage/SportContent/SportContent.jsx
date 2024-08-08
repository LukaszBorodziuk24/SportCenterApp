import {Image} from "react-bootstrap";
import {useState} from "react";
import LeftPentagon from "./LeftPentagon/LeftPentagon.jsx";
import Hourglass from "./Hourglass/Hourglass.jsx";
import RightPentagon from "./RightPentagon/RightPentagon.jsx";

const SportContent = () => {

    const [hovered, setHovered] = useState(null);
    return(
        <div className={"vh-100 d-flex pt-10"}>
            <LeftPentagon onHover={setHovered} isHovered={hovered === 'left'} />
            <Hourglass onHover={setHovered} isHovered={hovered === 'middle'} />
            <RightPentagon onHover={setHovered} isHovered={hovered === 'right'} />
        </div>
    )
}

export default SportContent