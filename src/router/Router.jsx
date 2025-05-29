import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component:RootLayout,
        children: [
            {
                index:true,
                Component:Home,
            }
        ]
    },
]);
export default router;
