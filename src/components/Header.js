import { useState } from "react";
import { LOGO_URL } from "../utility/constant";

const Header = () =>{
    const [btnName,setBtnName] = useState('Logout');
    return(
        <div id="header" className="header-class">
            <div id="udemy-logo">
                <img src={LOGO_URL} alt="logo"/>
                </div>
            <div id="nav-items">
            <ul id="ul-list">
                <li>Plans & Pricing</li>
                <li>Udemy Business</li>
                <li>Teach on Udemy</li>
                <li>Cart</li>
                <li onClick={
                    ()=>{
                        btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
                }}>{btnName}</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;