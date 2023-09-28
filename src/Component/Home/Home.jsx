import MessageFchairman from "./About/MessageFchairman";
import Banner from "./Banner/Banner";
import Client from "./Client/Client";
import HomePage from "./Homepage/HomePage";

import Services from "./Services/Services";
import Footer from "./Shared/Footer";
import Navbar1 from "./Shared/Navbar1";
import Navbar2 from "./Shared/Navbar2";


const Home = () => {
    return (
        <div>
            <Navbar1></Navbar1>
            <Navbar2></Navbar2>
            <Banner></Banner>
            <HomePage></HomePage>
            <MessageFchairman></MessageFchairman>
            <Services></Services>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;