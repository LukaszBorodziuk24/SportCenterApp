import "./SportBanner.css"
import FilterPopup from "../FilterPopup/FilterPopup.jsx";
import {useState} from "react";
import SearchBar from "../../SharedComponents/SearchBar/SearchBar.jsx";
import { useAuth } from "../../../contexts/AuthContext.jsx";
import BecomeTrainerModal from "../BecomeTrainerModal/BecomeTrainerModal.jsx";

import SportTypePopup from "../SportTypePopup/SportTypePopup.jsx";

const SportBanner = ({sport, setSport, setFilterBy, filterBy, sortBy, setSortBy, isAscending, setIsAscending}) => {
    const { isAuthorized } = useAuth();
    const [showModal, setShowModal] = useState(false);

    


    return (
        <div className={"row pt-10 h-20 w-100 pb-3 mb-5 align-items-center"}>
            <div className={"col d-flex justify-content-start h-100"}>
                <div >
                    <SportTypePopup sport={sport} setSport={setSport}/>
                </div>
                {isAuthorized ? (
                    <button
                        className={"filterButton ms-3 pe-3 ps-3"}
                        onClick={() => setShowModal(true)}
                    >
                        Become Trainer
                    </button>
                ) : null}
            </div>

            <div className={"col d-flex justify-content-xxl-end justify-content-lg-center"}>
                <FilterPopup sortBy={sortBy} setSortBy={setSortBy} isAscending={isAscending} setIsAscending={setIsAscending}/>
                <SearchBar setFilterBy={setFilterBy}/>
            </div>
            <BecomeTrainerModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSuccess={() => setShowModal(false)}
            />

        </div>
    )
}

export default SportBanner