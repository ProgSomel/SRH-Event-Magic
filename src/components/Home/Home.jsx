
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";

const Home = () => {

    const services = useLoaderData();

    console.log(services);
    return (
        <div className="">
            <Header></Header>
            <Services services={services}></Services>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;