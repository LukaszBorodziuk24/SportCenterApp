import "./TrainerTile.css"
import { useNavigate } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import KickboxingBg from "@assets/test.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const TrainerTile = ({ user }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/trainer/profile/${user.id}`);
    };
    return (
        <Card className={"trainerTile bg-transparent border-0 "} style={{ cursor: "pointer" }} onClick={handleClick}>
            <Card.Img
                src={user?.photo || KickboxingBg}
                className={"h-100 object-fit-cover rounded-5"}
            />
            <Card.ImgOverlay
                className={"d-flex justify-content-between align-items-end"}
            >
                <Col className={"position-relative"}>
                    <Card.Title>{user.name} {user.lastName}</Card.Title>
                    <Card.Text className={"d-flex align-items-center greyFont"} >
                        <FaLocationDot className={"me-2"}/> {user.city}, {user.country}
                    </Card.Text>
                </Col>
            </Card.ImgOverlay>
        </Card>
    );
};

export default TrainerTile;