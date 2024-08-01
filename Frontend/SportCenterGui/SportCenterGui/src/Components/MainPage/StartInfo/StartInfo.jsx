import {Button, Image} from "react-bootstrap";
import arrowDown from '@assets/arrow.svg';
import "./StartInfo.css"

const StartInfo = () =>{
    return(
        <div className="col-6">
            <p className="text-left ms-5 textCustom">
                PUSH PAST<br/>
                YOUR <br/>
                LIMITS
            </p>

            <div className={"d-flex position-absolute bottom-0 start-5 m-5"}>
                <Button className="alert-danger ms-2 mb-1 buttonCustom">
                    <Image src={arrowDown}/>
                </Button>
            </div>

        </div>
    )
}

export default StartInfo