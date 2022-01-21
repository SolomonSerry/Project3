// Buttons.js

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Buttons = ( props ) => {

    return (
        <section>
            
            <div className="btnContainer wrapper">
                <button className="iconLeft"  onClick={()=> props.setPage(props.page - 1 )}>
                    <FaChevronLeft />
                </button> 

                <h4>{`Page ${props.page}`}</h4>
            
                <button className="iconRight" onClick={() => props.setPage(props.page + 1 )}>
                    <FaChevronRight />
                </button>
            
            </div>
            
        </section>
    )
}

export default Buttons;