import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";

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
            }
        ]
    },
]);
export default router;
