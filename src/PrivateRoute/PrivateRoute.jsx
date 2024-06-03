import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    if(loading){
       return <div>
            <p>loading....</p>
        </div>
    }
    if(user){
    return children;
    }
   return <Navigate to={'/login'} state={{from:location}} replace/>
};

export default PrivateRoute;