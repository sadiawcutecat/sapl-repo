

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex-col h-[400px] ">
                    <img src="/public/images/SAPL-Annual-Report-2020-21-Slider-scaled.jpg" className="w-full" />
                    {/* <div className="hero container w-full font-mono font-bold" style={{ backgroundImage: `url(${banner1})`, height:"600px" }}>
                    <div className="hero-overlay bg-opacity-60"></div>   

                    </div> */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                    <div className="card w-96 bg-white container relative  bottom-96 z-50 left-60 py-12 " >
                        
                        <div className="card-body">
                            
                            <p className="text-2xl font-bold text-sky-800 px-">Annual Report 2021-22 of Summit Alliance Port Ltd (SAPL) is now available</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px]">
                    <img src="/public/images/Reva-Ganguli-Slider-Photo-02.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/public/images/SAPL-Provides-Much-Needed-Alternative-Import-Logistics-Solutions-to-Bangladesh.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/public/images/GRT-Handover-ceremony-Slider-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="/public/images/SAPL-is-the-leading-off-dock-in-the-Bangladesh’s-private-sector.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;