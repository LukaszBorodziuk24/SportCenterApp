
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image, Form, Button } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";
import ReviewSection from './ReviewSection/ReviewSection';
import NavbarComp from "../../Navbar/NavbarComp";
import { useParams, useLocation } from "react-router-dom";
import { getTrainerBg } from "../../../utils/getTrainerBg";
import "./TrainerProfilePage.css";
import { trainerAPI } from "../../../services/api";
import { useAuth } from "../../../contexts/AuthContext";
import { FaEdit } from "react-icons/fa";

const TrainerProfilePage = () => {
    const {id} = useParams();
    const location = useLocation();
    const initialTrainer = location.state?.user || {};
    const [trainer, setTrainer] = useState(initialTrainer);
    const { isCurrentUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [tempDescription, setTempDescription] = useState("");


    useEffect(() => {

    }, [trainer.id]);

    useEffect(() => {
        trainerAPI.getProfileDetails(id).then(apiData => {
            setTrainer(prev => ({
            ...prev,
            name: apiData.name,
            lastname: apiData.lastName,
            rating: apiData.rating,
            city: apiData.city,
            country: apiData.country,
            sportType: apiData.sportType,
            coverPhoto: apiData.coverPhoto,
            avatarPhoto: apiData.avatarPhoto
            }));
        });
        const fetchDescription = async () => {
            try {
                const description = await trainerAPI.getDescription(id);

                setTrainer(prev => ({
                    ...prev,
                    description: description
                }));

                setTempDescription(description);

            } catch (error) {
                console.error("Error fetching description:", error);
            }
        };

        if (id) {
            fetchDescription();
        }
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(true);
        setTempDescription(trainer.description);
    };

    const handleSave = async () => {
        if (tempDescription !== trainer.description) {
            try {
                await trainerAPI.updateDescription(id, tempDescription);
                
                setTrainer(prev => ({
                    ...prev,
                    description: tempDescription
                }));
            } catch (error) {
                console.error("Error updating description:", error);
            }
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTempDescription(trainer.description);
    };

    return (
        <div style={ getTrainerBg(trainer.sportType)}>
            <div style={{ height: "10vh", minHeight: 60 }}>
                <NavbarComp />
            </div>
            <Container fluid className="trainer-profile-main-container d-flex flex-column align-items-center px-0">
                <div className="trainer-profile-content">
                    <Card className="mb-4 shadow-lg border-0 rounded-4 text-light position-relative w-100 trainer-profile-card blurBg">
                        <Card.Img src={trainer.coverPhoto} alt="cover" className="trainer-cover-img" />
                        <Card.Body className="pt-0">
                            <Row className="align-items-end position-relative trainer-profile-row">
                                <Col xs="auto">
                                    <Image src={trainer.avatarPhoto} roundedCircle className="trainer-avatar-img" />
                                </Col>
                                <Col>
                                    <h2 className="mb-1">{trainer.name} {trainer.lastname}</h2>
                                    <div className="d-flex align-items-center gap-3 text-warning fw-semibold">
                                        <span>★ {trainer.rating}</span>
                                        <span className="text-light-emphasis">{trainer.city}, {trainer.country}</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Row className="gy-4 align-items-stretch">
                        <Col md={5} className="d-flex">
                            <Card className="border-0 rounded-4 shadow-sm blurBg flex-grow-1">
                                <Card.Body className="d-flex flex-column flex-grow-1 about-me">
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <h4 className="fw-bold m-0">About me</h4>
                                        {isCurrentUser(id) && !isEditing && (
                                            <FaEdit 
                                                size={24} 
                                                color="#0db48d" 
                                                className="edit-icon"
                                                onClick={handleEditClick}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </div>

                                    {isEditing ? (
                                        <Form className="flex-grow-1">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    as="textarea"
                                                    rows={4}
                                                    value={tempDescription}
                                                    onChange={(e) => setTempDescription(e.target.value)}
                                                    className="bg-dark text-light border-secondary"
                                                />
                                            </Form.Group>
                                            <div className="d-flex gap-2">
                                                <Button 
                                                    type="button" 
                                                    variant="success" 
                                                    onClick={handleSave}
                                                >
                                                    Save
                                                </Button>
                                                <Button 
                                                    type="button" 
                                                    variant="secondary" 
                                                    onClick={handleCancel}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </Form>
                                    ) : (
                                        <div className="flex-grow-1">
                                            {trainer.description}
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={7} className="d-flex">
                            <Calendar isCurrentUser={isCurrentUser} trainerId={id} />
                        </Col>
                    </Row>
                </div>
                <div className="trainer-profile-comments-section expanded">
                    <ReviewSection trainerId={id} isCurrentUser={isCurrentUser(id)} />
                </div>
            </Container>
        </div>
    );
};

export default TrainerProfilePage;
