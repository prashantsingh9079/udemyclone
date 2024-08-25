import { useState } from "react";
import { LOGO_URL } from "../utility/constant";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState('Logout');
    return (
        <div id="header" className="header-class">
            <div id="udemy-logo">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div id="nav-items">
                <ul id="ul-list">
                <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/github">
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Cart
                        </Link>
                    </li>
                    <li onClick={
                        () => {
                            btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
                        }}>{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;