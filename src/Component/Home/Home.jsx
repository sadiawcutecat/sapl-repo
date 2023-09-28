import Banner from "./Banner/Banner";
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
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;