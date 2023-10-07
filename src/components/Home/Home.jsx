import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {

    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Header></Header>
            <Services services={services}></Services>
        </div>
    );
};

export default Home;