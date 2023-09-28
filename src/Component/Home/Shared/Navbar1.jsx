/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";


function Navbar1() {
    return (
        <div>
            <div className="navbar bg-sky-800">
                <a className="btn btn-ghost  text-white">The largest off-dock in Bangladesh including the first IWCT in the country's private sector
                </a>
                <div className="flex justify-between ms-auto space-x-4 me-20 ">
                    <a href=""><FaFacebookF style={{ fontSize: '2rem', color: "white" }}></FaFacebookF></a>
                    <a href=""><TfiYoutube style={{ fontSize: '2rem', color: "white" }}></TfiYoutube></a>
                    <a href=""><FaLinkedinIn style={{ fontSize: '2rem', color: "white" }}></FaLinkedinIn></a>
                </div>
            </div>

        </div>
    );
}

export default Navbar1;