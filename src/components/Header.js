import { FaBars } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="navContainer wrapper">
                    <div>
                    <RiMovie2Fill />
                        <h3>Movie App</h3>
                    </div>
                </div>
            </nav>
        
            <div className="title wrapper">
                <h1>THE MOVIE APP</h1>
                <p>Finding The Best Movies</p>

            </div>
        </header>
    )
}

export default Header;