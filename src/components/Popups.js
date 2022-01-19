import React from "react";

const Popups = (props) => {
    return(props.trigger) ? (
        <div>
            <h2>Movie Info</h2>
            <div>
                <button>close</button>
            </div>

        </div>
    ) : "";
}

export default Popups