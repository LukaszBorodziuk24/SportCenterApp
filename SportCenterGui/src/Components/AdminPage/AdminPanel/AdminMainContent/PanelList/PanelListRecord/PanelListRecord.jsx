import "./PanelListRecord.css"
import {FaUser} from "react-icons/fa";
import {Button} from "react-bootstrap";
import {RxPencil1} from "react-icons/rx";
import {BsFillPencilFill} from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const PanelListRecord = ({user})=>{

    const navigate = useNavigate();
    const handleOnClick = () =>{
        navigate(`/trainer/profile/${user.id}`);
    }
    return(
        <div className="justify-content-evenly align-items-center row text-black panelRecordBg m-3 rounded-3">
            <p className="col-3 m-0">{user.name}</p>
            <p className="col-3 m-0">{user.lastName}</p>
            <p className="col-3 m-0">{user.city}</p>
            <div className="col-3 d-flex justify-content-evenly m-0">
                <div className="updateUserBtn p-2 rounded-3 d-flex align-items-center justify-content-center" onClick={handleOnClick}>
                    <FaUser color="white"/>
                </div>
            </div>
        </div>
    )
}
export default PanelListRecord