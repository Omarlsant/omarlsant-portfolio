import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Loader from "../components/Loader";
import UnderConstruction from "../components/UnderConstruction";

const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));

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
                element: (
                    <Suspense fallback={<Loader />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "projects",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Projects />
                    </Suspense>
                ),
            },
            {
                path: "contact",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "in-construction",
                element: <UnderConstruction />,
            },
            {
                path: "*",
                element: <div className="flex justify-center items-center h-full text-2xl font-bold py-24 text-slate-700">404: Page Not Found</div>,
            }
        ]
    }
], {
    basename: "/omarlsant-portfolio"
});