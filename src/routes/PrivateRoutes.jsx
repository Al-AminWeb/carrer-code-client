import React, {use} from 'react';
import AuthContext from "../context/AuthContext/AuthContext.jsx";
import {Navigate, useLocation} from "react-router";

const PrivateRoutes = ({children}) => {


    const {user,loading} =use(AuthContext);
    const location = useLocation();
    if (loading) {
        return  <span className="loading loading-ring loading-xl"></span>
    }
    if(!user){
       return <Navigate to="/login" state={location.pathname}></Navigate>

    }
    return children;
};

export default PrivateRoutes;
