import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Buttons = ( props ) => {

    return (
        <div className="btnContainer wrapper">
            <button className="icon"  onClick={()=> props.setPage(props.page - 1 )}>
                <FaChevronLeft />
            </button>

            <h4>{`Page ${props.page}`}</h4>
           
            <button className="icon" onClick={() => props.setPage(props.page + 1)}>
                <FaChevronRight />
            </button>
          
        </div>
    )
}

export default Buttons;