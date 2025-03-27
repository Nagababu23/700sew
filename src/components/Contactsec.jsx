import React from "react";
import { useNavigate } from "react-router-dom";
import Contacts from "./Contacts";
import Footer from "./Footer";

const Contactsec = () => {
    const navigate = useNavigate();
    return(
        <div className="sec">
            <button onClick={() => navigate("/")} className="backButton">
                        Back
                    </button>
                    <Contacts />
                    <Footer />
        </div>
    )
}
export default Contactsec;