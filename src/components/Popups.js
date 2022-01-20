import { ImCross } from "react-icons/im";
import React from "react";

const Popups = (props) => {

    return(props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
            <h2>Movie Info</h2>
                <button className="closeBtn" onClick={() => props.setTrigger(false)}>
                    <ImCross />
                </button>
            </div>

        </div>
    ) : "";
}

export default Popups