import { FaLongArrowAltRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex-col h-[700px] ">
                    <img src="/public/images/SAPL-Annual-Report-2020-21-Slider-scaled.jpg" className="w-full" />
                    {/* <div className="hero container w-full font-mono font-bold" style={{ backgroundImage: `url(${banner1})`, height:"600px" }}>
                    <div className="hero-overlay bg-opacity-60"></div>   

                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                    <div className=" w-96 bg-slate-50  container relative  bottom-96 z-50 left-60  " >

                        <div className="p-12">

                            <p className="text-2xl font-bold text-sky-800 ">Annual Report 2021-22 of Summit Alliance Port Ltd (SAPL) is now available</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-slate-50 mt-8 text-sky-800 ">Read more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full  flex-col h-[700px] ">
                    <img src="/public/images/Reva-Ganguli-Slider-Photo-02.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className=" w-96  bg-slate-50 container relative  bottom-96 z-50 left-60  " >

                        <div className="p-8">

                            <p className="text-2xl font-bold text-sky-800 mb-6">First container cargo export from India arrives at Bangladesh using inland waterway</p>

                            <p className="  text-sky-800 ">
                                The maiden containerized cargo export from India to Bangladesh using inland waterways reached

                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-slate-50  text-sky-800 ">Read more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="slide3" className="carousel-item relative w-full flex-col h-[700px] ">
                    <img src="/public/images/SAPL-Provides-Much-Needed-Alternative-Import-Logistics-Solutions-to-Bangladesh.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className=" w-96 bg-slate-50 container relative  bottom-96 z-50 left-60  " >
                        <div className="p-8">

                            <p className="text-2xl font-bold text-sky-800 mb-6">SAPL Provides Much Needed Alternative Import Logistics Solutions to Bangladesh</p>
                            <p className="text-sky-800 ">
                                In an attempt to decongest Chattogram Port an inland container vessel is seen discharging a full load of containers, originally bound for Kamalapur ICD, at SAPL’s Container Terminal located at Munshiganj.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-slate-50  text-sky-800 ">Read more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                            </div>
                        </div>
                    </div>


                </div>
                <div id="slide4" className="carousel-item relative w-full flex-col h-[500px]">
                    <img src="/public/images/GRT-Handover-ceremony-Slider-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    <div className=" w-96 bg-slate-50 container relative  bottom-96 z-50 left-60  " >
                        <div className="p-8">

                            <p className="text-2xl font-bold text-sky-800 mb-6">IWAI’s first ever PPP with Summit Alliance Port
                            </p>
                            <p className="text-sky-800 ">
                                In the presence of Shipping Secretary, Ministry of Shipping of India Shri Gopal Krishna, the Inland Waterways Authority of India (IWAI) in its first-ever Public Private Partnership (PPP) handed over three terminals i.e. Garden Reach Terminal in Kolkata, and Gaighat and Kalughat Terminals in Patna, to Summit Alliance Port East Gateway (SAPEGIL)</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-slate-50  text-sky-800 ">Read more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="slide5" className="carousel-item relative w-full flex-col h-[500px]">
                    <img src="/public/images/SAPL-is-the-leading-off-dock-in-the-Bangladesh’s-private-sector.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        <div className=" w-96 bg-slate-50 container relative right-80 -z-30 " >
                            <div className="p-8">

                                <p className="text-2xl font-bold text-sky-800 mb-6">SAPL is the Leading Off-Dock in Bangladesh’s Private Sector
                                </p>
                                <p className="text-sky-800 ">
                                    The Company presently handles over 20% of the country’s entire containerized export and over 10% of the permitted containerized import items. With the over 25 years of experience SAPL enjoys excellent relationships with the major Shipping Lines and Freight Forwarders.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-slate-50  text-sky-800 ">Read more <FaLongArrowAltRight></FaLongArrowAltRight></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;