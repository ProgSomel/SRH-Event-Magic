import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div className="  max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16">
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;