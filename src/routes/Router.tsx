import { createHashRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import UnderConstruction from "../components/UnderConstruction";

// Cambiamos createBrowserRouter a createHashRouter para Github Pages
export const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "in-construction",
                element: <UnderConstruction />,
            },
           {
               path: "*",
               element: <div className="flex justify-center items-center h-full text-2xl font-bold">404: Page Not Found</div>,
           }
       ]
   }
]);