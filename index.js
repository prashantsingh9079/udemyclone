import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import CourseInfo from "./src/components/CourseInfo";
const Github = lazy(() => import("./src/components/Github"));

const AppLayout = () => {
    return (
        <div id="app-layout">
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/course/:courseId",
                element: <CourseInfo />
            },
            {
                path: "/github",
                element: <Suspense fallback={<h1>loading........</h1>}>
                    <Github />
                </Suspense>
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);