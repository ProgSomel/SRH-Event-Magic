import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home/Home";
import Reviews from "../components/Reviews/Reviews";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('/data.json'),
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/ServiceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ()=> fetch('/data.json')
            }
            
        ]
    }
])

export default myCreatedRoute;
