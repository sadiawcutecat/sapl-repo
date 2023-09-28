import { Link } from "react-router-dom";




const Navbar2 = () => {
  return (
    <nav className="bg-white p-5">
      <div className="container mx-auto flex ">
        <div>
          <a href="#" className="text-black text-lg font-semibold">Your Logo/Brand</a>
        </div>
        <div className="flex justify-between ms-auto">
          <div className="hidden md:block ">
            <ul className="space-x-9 py-2">
              <li className="inline-block ">
                <a href="#" className="text-black hover:text-blue-200">HOME</a>
              </li>
              <li className="inline-block  group relative">
                <a href="#" className="text-black group-hover:text-blue-200">ABOUT US</a>
                <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-md">
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">COMPANY PROFILE</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2   hover:bg-gray-100">MESSAGE FROM CHAIRMAN</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2  hover:bg-gray-100">MESSAGE FROM MD</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">BOARD OF DIRECTORS</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">MANAGEMENT</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">FACILITIES</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">SUCCES MILESTONE</a></li>
                </ul>
              </li>
              <li className="inline-block  group relative">
                <Link to="/service" className="text-black group-hover:text-blue-200">SURVICES</Link>
                
                <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-md">
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">ICD</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">CFS</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">IMPORT</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">VALUE ADDED SERVICES</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">REPAIR (MNR)</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">TRANSPORTATION</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">LEASING</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">TRUCK PARKING</a></li>
                </ul>
              </li>
              <li className="inline-block  group relative">
                <a href="#" className="text-black group-hover:text-blue-200">SUSTAINABILITY</a>
                <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-md">
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">CORPORATE GOVERNANCE</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">CSR</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">HSSE</a></li>
                </ul>
              </li>
              <li className="inline-block group relative">
                <a href="#" className="text-black group-hover:text-blue-200">INVESTOR RELATIONS</a>
                <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-md">
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">BSEC ANNOUNCEMENT</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">INVESTOR RELATIONS CONTACT</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white"></a>ANNUAL REPORTS</li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">DIRECTORS REPORT</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">FINANCIAL STATEMENTS</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">CREDIT RATING</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">PRICE SENSITIVE INFORMATION & NOTICE</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">DIVIDEND DISBURSEMENT COMPLIANCE REPORT</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">SHARE PRICE & ANALYSIS</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">NRC POLICY</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">DIVIDEND DISTRIBUTION POLICY</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-white">UNCLAIMED DIVIDEND</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">FAQ</a></li>
                </ul>
              </li>
              <li className="inline-block  group relative">
                <a href="#" className="text-black group-hover:text-blue-200">MEDIA</a>
                <ul className="absolute hidden group-hover:block mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-md">
                  <li className="border-t  border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">PRESS RELEASE</a></li>
                  <li className="border-t  border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">MEDIA ARTICLES</a></li>
                  <li className="border-t border-gray-200"><a href="#" className="block px-4 py-2 hover:bg-gray-100">VIDEOS</a></li>
                </ul>
              </li>
              <li className="inline-block ">
                <a href="#" className="text-black hover:text-blue-200">CAREER</a>
              </li>
              <li className="inline-block ">
                <a href="#" className="text-black hover:text-blue-200">CONTACT</a>
              </li>
            </ul>

          </div>
          <div className="form-control ms-16">
            <div className="input-group">
              <input type="text" placeholder="Search" className="input input-bordered" />
              <button className="btn btn-square bg-sky-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>

          </div>

        </div>


        {/* <div className="md:ml-4">
          <div className="relative">
            <input type="text" className="border rounded-lg py-1 px-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search" />
            <button className="absolute right-0 top-0 mt-1 mr-2 focus:outline-none">
              <i className="text-gray-500 fas fa-search"></i>
            </button>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar2;