import "./SportTypePopup.css";
import Popup from "reactjs-popup";
import { Form } from "react-bootstrap";
import {
    GiBoxingGlove,
    GiWeightLiftingUp
} from "react-icons/gi";
import { FcSportsMode } from "react-icons/fc";
import { GiGymBag } from "react-icons/gi";

const SportTypePopup = ({ sport, setSport }) => {

    const sportIcons = {
        gym: <GiWeightLiftingUp className="sportIcon" />,
        kickboxing: <GiBoxingGlove className="sportIcon" />,
        crossfit: <FcSportsMode className="sportIcon" />,
    };

    return (
        <Popup
            trigger={
                <div style={{ cursor: "pointer" }}>
                    {sportIcons[sport] || <GiGymBag className="sportIcon" />}
                </div>
            }
            position="right top"
        >
            <div className={"pt-3 pb-3 pe-5 ps-3 rounded-3 sportPopup-style"}>
                <Form className={"sportPopup-radio"}>
                    <Form.Group>
                        <Form.Label>Sport Type:</Form.Label>

                        <Form.Check
                            type="radio"
                            id="sportAll"
                            name="sportType"
                            label="All sports"
                            value=""
                            checked={!sport}
                            onChange={() => setSport("")}
                        />

                        <Form.Check
                            type="radio"
                            id="sportGym"
                            name="sportType"
                            label="Gym"
                            value="gym"
                            checked={sport === "gym"}
                            onChange={(e) => setSport(e.target.value)}
                        />

                        <Form.Check
                            type="radio"
                            id="sportKickboxing"
                            name="sportType"
                            label="Kickboxing"
                            value="kickboxing"
                            checked={sport === "kickboxing"}
                            onChange={(e) => setSport(e.target.value)}
                        />

                        <Form.Check
                            type="radio"
                            id="sportCrossfit"
                            name="sportType"
                            label="Crossfit"
                            value="crossfit"
                            checked={sport === "crossfit"}
                            onChange={(e) => setSport(e.target.value)}
                        />

                    </Form.Group>
                </Form>
            </div>
        </Popup>
    );
};

export default SportTypePopup;