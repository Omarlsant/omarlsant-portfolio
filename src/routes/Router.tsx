import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import UnderConstruction from "../components/UnderConstruction";

const basename = "/omarlsant-portfolio";

export const router = createBrowserRouter([
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
               element: <div>App 404: Page Not Found in Router</div>,
           }
       ]
   }
],

{ basename: basename }

);