import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home/Home";
import Reviews from "../components/Reviews/Reviews";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyBookings from "../Pages/MyBookings/MyBookings";
import ContactUS from "../Pages/ContactUS/ContactUS";
import About from "../Pages/About/About";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,

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
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/mybooking',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: 'contactus',
                element: <PrivateRoute><ContactUS></ContactUS></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            }
            
        ]
    }
])

export default myCreatedRoute;
