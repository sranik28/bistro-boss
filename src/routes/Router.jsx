import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OurShop from "../pages/OurShop";
import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/our-menu",
                element: <Menu />
            },
            {
                path: "/our-shop/:category",
                element: <OurShop />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    }
]);

export default Router