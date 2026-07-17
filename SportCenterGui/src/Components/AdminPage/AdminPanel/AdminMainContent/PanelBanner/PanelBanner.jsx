import { useState } from 'react';
import "./PanelBanner.css"
import SearchBar from "../../../../SharedComponents/SearchBar/SearchBar.jsx";

const PanelBanner = ({setFilterBy}) => {

    return(
        <>
            <div className="panelBannerBg d-flex justify-content-evenly align-items-center text-black p-3 m-2 rounded-5">
                <p className="col-3 m-0">Name</p>
                <p className="col-3 m-0">LastName</p>
                <p className="col-3 m-0">City</p>
                <div className="col-3 row m-0">
                    <SearchBar setFilterBy={setFilterBy} style="col-8"/>
                </div>
            </div>

        </>
    );
};

export default PanelBanner;