import "./SportBanner.css"
import {Button, Container, Form, FormGroup, FormLabel, InputGroup} from "react-bootstrap";
import {GiGymBag} from "react-icons/gi";
import {IoFilter} from "react-icons/io5";
import {SlMagnifier} from "react-icons/sl";


const SportBanner = () =>{

    return(
        <div className={"row pt-10 h-20 w-100 pb-3 mb-5 align-items-center"}>
            <div className={"col d-flex justify-content-start h-100"}>
                <GiGymBag className={"sportIcon"} />
            </div>

            <div className={"col d-flex justify-content-xxl-end justify-content-lg-center"}>
                <button className={"filterButton me-4 pe-3 ps-3"}>
                    <IoFilter className={"filterIcon"}/> Filter
                </button>
                <Form className={"w-50"}>
                    <Form.Group>
                        <InputGroup>
                            <InputGroup.Text className={"rounded-start-3"}>
                                <SlMagnifier />
                            </InputGroup.Text>

                            <Form.Control
                                type={"text"}
                                placeholder={"Search"}
                                className={"rounded-end-3"}
                            />

                        </InputGroup>

                    </Form.Group>
                </Form>
            </div>

        </div>
    )
}

export default SportBanner