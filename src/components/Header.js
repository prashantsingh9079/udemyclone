import { useState } from "react";
import { LOGO_URL } from "../utility/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState('Logout');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between p-4 border-b-2 bg-gray-100">
            <div className="w-[100px]">
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="justify-evenly">
                <ul className="flex">
                    <li className="m-2">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="m-2">
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="m-2">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="m-2">
                        <Link to="/github">
                            Github
                        </Link>
                    </li>
                    <li className="m-2">
                        <Link>
                            Status {onlineStatus ? "🟩" : "🟨"}
                        </Link>
                    </li>
                    <li className="m-2" onClick={
                        () => {
                            btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
                        }}>{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;