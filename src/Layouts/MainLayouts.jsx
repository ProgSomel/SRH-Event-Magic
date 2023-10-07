import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div className="  ">
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;