import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OurShop from "../pages/OurShop";
import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";

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
                path: "/our-shop",
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
        ]
    }
]);

export default Router