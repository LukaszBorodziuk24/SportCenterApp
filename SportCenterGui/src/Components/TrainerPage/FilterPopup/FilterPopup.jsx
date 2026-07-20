import "./FilterPopup.css"
import Popup from "reactjs-popup";
import {IoFilter} from "react-icons/io5";
import {Button, Form} from "react-bootstrap";
import {TbArrowsSort} from "react-icons/tb";
import { useState } from "react";


const FilterPopup = ({sortBy, setSortBy, isAscending, setIsAscending}) => {


    return(
        <Popup
            trigger={open => (<button className={"filterButton me-4 pe-3 ps-3"}>
                        <TbArrowsSort className={"filterIcon h-100"}/> Sort
                    </button>)}
            position="left top"
        >
            <div className={"pt-3 pb-3 pe-5 ps-3 rounded-3 popup-style"}>
                <Form className={"custom-radio"}>
                    <Form.Group className={"mb-3"}>
                        <Form.Label>Sort direction:</Form.Label>
                        <Form.Check
                            type="radio"
                            id="radio1"
                            name="sortDirection"
                            label="Ascending"
                            checked={isAscending === true}
                            onChange={() => setIsAscending(true)}
                        />

                        <Form.Check
                            type="radio"
                            id="radio2"
                            name="sortDirection"
                            label="Descending"
                            checked={isAscending === false}
                            onChange={() => setIsAscending(false)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Sort by:</Form.Label>
                        <Form.Check
                            type="radio"
                            id="radio3"
                            name="sortBy"
                            label="Name"
                            value="name"
                            checked={sortBy === "name"}
                            onChange={(e) => setSortBy(e.target.value)}
                        />

                        <Form.Check
                            type="radio"
                            id="radio4"
                            name="sortBy"
                            label="Last Name"
                            value="lastname"
                            checked={sortBy === "lastname"}
                            onChange={(e) => setSortBy(e.target.value)}
                        />

                        <Form.Check
                            type="radio"
                            id="radio5"
                            name="sortBy"
                            label="Rating"
                            value="rating"
                            checked={sortBy === "rating"}
                            onChange={(e) => setSortBy(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>

        </Popup>


    )
}

export default FilterPopup