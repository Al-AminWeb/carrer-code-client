import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import LogIn from "../pages/login/LogIn.jsx";
import JobDetails from "../pages/jobdetails/JobDetails.jsx";
import PrivateRoutes from "../routes/PrivateRoutes.jsx";
import JobApply from "../pages/jobApply/JobApply.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component:RootLayout,
        children: [
            {
                index:true,
                Component:Home,
            },
            {
                path:"/register",
                Component:Register,
            },
            {
                path:"/login",
                Component:LogIn,
            },
            {
                path:"/jobs/:id",
                Component:JobDetails,
                loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path:'jobApply/:id',
                element:<PrivateRoutes>
                    <JobApply></JobApply>
                </PrivateRoutes>
            }
        ]
    },
]);
export default router;
