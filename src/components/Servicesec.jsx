import React from "react";
import { useNavigate } from "react-router-dom";
import Services from "./Services";
import Footer from "./Footer";
import "../css/back.css"


const Servicesec = () => {
    const navigate = useNavigate(); 

    return (
        <div className="sec">
            <button onClick={() => navigate("/")} className="backButton">
                Back
            </button>
            <Services />
            <Footer />
        </div>
    );
};

export default Servicesec;
