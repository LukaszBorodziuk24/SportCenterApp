
import "./TrainerPage.css"
import NavbarComp from "../Navbar/NavbarComp.jsx";
import {useState} from "react";
import {useParams} from "react-router-dom";

import { getTrainerBg } from "../../utils/getTrainerBg";
import TrainerMainContent from "./TrainerMainContent/TrainerMainContent.jsx";
import SportBanner from "./SportBanner/SportBanner.jsx";

const TrainerPage = () => {
    const {sport} = useParams();
    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [isAscending, setIsAscending] = useState(false);

    return(
        <div className={"trainerCustom"} style={getTrainerBg(sport)}>
            <NavbarComp/>
            <SportBanner sport={sport} setFilterBy={setFilterBy} filterBy={filterBy} sortBy={sortBy} setSortBy={setSortBy} isAscending={isAscending} setIsAscending={setIsAscending}/>
            <TrainerMainContent userSportType={sport} filterBy={filterBy} sortBy={sortBy} isAscending={isAscending}/>
        </div>
    )
}

export default TrainerPage