import { FaTrophy, FaStar } from "react-icons/fa";
import "./RankingTile.css"
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { rankingAPI } from "../../../../../services/api";

const RankingTile = ({reloadOnClose}) => {
    

    const [topTrainers, setTopTrainers] = useState({
        gym: [],
        kickboxing: [],
        crossfit: []
    });


    useEffect(() => {
        const fetchRankings = async () => {
            const ranking = await rankingAPI.getRankings();

            setTopTrainers({
                gym: ranking.gym,
                kickboxing: ranking.kickboxing,
                crossfit: ranking.crossfit
            });
        };

        fetchRankings();
    }, []);

    return (
        <>
            <div className={"rankingCustom d-flex flex-column align-items-center h-100"}>
                <Row className={"h-100 w-100"}>
                    <Col className={"col-12 d-flex flex-column justify-content-between text-center"}>
                        <p className={"h5 rankingTitle mt-2"}>Top Trainers</p>
                        <div className={"me-3 ms-3 pt-2 pb-2 align-items-center rankingIconWrapper"}>
                            <FaTrophy className={"rankingIcon"}/>
                        </div>
                        <div className="categories-container">
                            <Row className="g-2">
                                <Col md={4} className="category-column">
                                    <h6 className="category-title">Kickboxing</h6>
                                    {topTrainers.kickboxing.map((trainer, index) => (
                                        <div key={trainer.id} className="trainer-item d-flex justify-content-between align-items-center mb-2">
                                            <span className="trainer-position">{index + 1}</span>
                                            <span className="trainer-name">{trainer.name}</span>
                                            <div className="trainer-rating d-flex align-items-center">
                                                <FaStar className="star-icon" />
                                                <span className="rating-value">{trainer.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                                <Col md={4} className="category-column">
                                    <h6 className="category-title">Gym</h6>
                                    {topTrainers.gym.map((trainer, index) => (
                                        <div key={trainer.id} className="trainer-item d-flex justify-content-between align-items-center mb-2">
                                            <span className="trainer-position">{index + 1}</span>
                                            <span className="trainer-name">{trainer.name}</span>
                                            <div className="trainer-rating d-flex align-items-center">
                                                <FaStar className="star-icon" />
                                                <span className="rating-value">{trainer.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                                <Col md={4} className="category-column">
                                    <h6 className="category-title">Crossfit</h6>
                                    {topTrainers.crossfit.map((trainer, index) => (
                                        <div key={trainer.id} className="trainer-item d-flex justify-content-between align-items-center mb-2">
                                            <span className="trainer-position">{index + 1}</span>
                                            <span className="trainer-name">{trainer.name}</span>
                                            <div className="trainer-rating d-flex align-items-center">
                                                <FaStar className="star-icon" />
                                                <span className="rating-value">{trainer.rating}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default RankingTile