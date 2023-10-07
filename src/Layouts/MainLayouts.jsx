import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayouts = () => {
    return (
        <div className="  ">
        <div className="mt-5 max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16">
            <Navbar></Navbar>
        </div>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayouts;