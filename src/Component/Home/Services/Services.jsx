
import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";


const Services = () => {

    const [Services, setServices] = useState([]);
 

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    // const Services = useLoaderData();
    // console.log(Services);

    return (
        <div>
            <div className="text-center my-12 ">
                <h2 className="text-4xl text-gray-700 font-bold my-5">SERVICES</h2>
                <p className="text-4xl text-gray-700">SAPL Offers Following Services </p>
            </div>

            <div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4 my-12">
                    {
                        Services?.map(service => 
                            
                            <>
                               <div className="flex justify-center shadow-lg   shadow-sky-500 ">
                               <div className="card w-80 bg-sky-800 shadow-xl ">
                                    <figure className="px-10 pt-10">
                                        <img src={service.img} alt="Shoes" className="" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-white">{service.title}</h2>
                                        
                                    </div>
                                </div>
                               </div>

                            </>
                        )
                    }

                </div>

            </div>
        </div>
    );
};

export default Services;