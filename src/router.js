import { createBrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import Contact from "./Contact";
import Home from "./Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/Profile",
        element: <Profile />
    },
    {
        path: "/Contact",
        element: <Contact />
    }
]);

export default router