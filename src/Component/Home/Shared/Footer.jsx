import { FaFacebookF, FaLinkedinIn,FaLongArrowAltRight } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-16 bg-sky-800 text-white text-xl">

                <div >
                    <div className="flex justify-between  space-x-4 ">
                        <Link><FaFacebookF style={{ fontSize: '2rem', color: "white" }}></FaFacebookF></Link>
                        <Link><TfiYoutube style={{ fontSize: '2rem', color: "white" }}></TfiYoutube></Link>
                        <Link><FaLinkedinIn style={{ fontSize: '2rem', color: "white" }}></FaLinkedinIn></Link>
                    </div>
                    <button className="btn  btn-outline px-20 font-bold text-xl text-white my-6">Contact us <FaLongArrowAltRight></FaLongArrowAltRight></button>

                </div>
                <div >
                    <Link>Home</Link>
                    <Link>About Us</Link>
                    <Link>Financial Statements</Link>
                </div>
                <div >
                    <Link>Career</Link>
                    <Link>Share Price & Analysis</Link>
                    <Link>Sitemap</Link>
                </div>



            </footer>
            <div className="footer border-t border-gray-200 p-4 bg-sky-800 text-white text-xl ">
                <div>
                    <p className="ms-9">Copyright ©2020 Summit Alliance Port Limited</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;