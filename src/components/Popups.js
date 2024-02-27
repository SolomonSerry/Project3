// Popups.js

import { ImCross } from "react-icons/im";
import React from "react";

const Popups = (props) => {

    return(props.trigger) ? (
        <section className="popup">
            <div className="popupInner">

                <h2>Movie Info</h2>
                    <button className="closeBtn" onClick={() => props.setTrigger(false)}>
                        <ImCross />
                    </button>

                <div className="flexContainer">

                    <div>
                        <img className="popupImg" src={`https://image.tmdb.org/t/p/w200${props.movieInfo.poster_path}`} alt={`Original poster of ${props.movieInfo.title}`} />
                        <h3>{props.movieInfo.title}</h3>
                    </div>

                    <aside className="contentContainer">

                        <div>
                            <h4>Overview</h4>
                            <p>{props.movieInfo.overview}</p>
                        </div>

                        <div>
                            <h4>Popularity</h4>
                            <p>{props.movieInfo.popularity}</p>
                        </div>

                        <div>
                            <h4>Release Date:</h4>
                            <p>{props.movieInfo.release_date}</p>
                        </div>
                    </aside>
                </div>
                
            </div>

        </section>
    ) : "";
}

export default Popups