import React from "react";
import HomePage from "./HomePage";
import Banner from "./Banner";

const Mhome = () => {
    return (
        <>
            <Banner/>
            <div id="home" className="section">
                <HomePage />
            </div>
        </>
    );
};

export default Mhome;
