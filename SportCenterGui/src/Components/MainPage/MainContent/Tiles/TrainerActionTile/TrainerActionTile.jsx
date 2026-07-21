import "./TrainerActionTile.css";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import BecomeTrainerTile from "./BecomeTrainerTile/BecomeTrainerTile.jsx";
import TrainerInfoTile from "./TrainerInfoTile/TrainerInfoTile.jsx";
import { authAPI } from "../../../../../services/api.js";

const TrainerTile = () => {
    // This will be replaced with actual isUserTrainer() function implementation
    const [role, setRole] = useState(null);

    useEffect(() => {
    (async () => {
        const role = await authAPI.getRole();
        console.log(role);
        setRole(role);
    })();
    }, []);
    

    
    return (
        <div className="trainerActionTile d-flex flex-column align-items-center justify-content-between h-100">
            <Row className={"h-100 w-100"}>
                <Col className={"col-12 d-flex flex-column justify-content-between text-center"}>
                    {role === "Trainer" && (
                        <TrainerInfoTile />
                    )}

                    {role === "User" && (
                        <BecomeTrainerTile />
                    )}

                    {(role === "Admin" || role === null) && (
                        <div   style={{
                            backgroundImage: "url('/home/benc/Documents/GitHub/SportCenterAppFrontend/SportCenterGui/src/assets/defaultProfileAvatar.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}></div>
                    )}
                    
                </Col>
            </Row>
        </div>
    );
};

export default TrainerTile;