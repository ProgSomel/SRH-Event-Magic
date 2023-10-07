import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayouts = () => {
    return (
        <div className="  ">
        <div className="mt-5 max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16">
            <Navbar></Navbar>
        </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;