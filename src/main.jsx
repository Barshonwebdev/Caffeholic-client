import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Homepage/Home.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Login from './AuthenticationRoutes/Login.jsx';
import Register from './AuthenticationRoutes/Register.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Stories from './Pages/Stories/Stories.jsx';
import Coffees from './Pages/Coffees/Coffees.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/coffees",
        element:<PrivateRoute><Coffees/></PrivateRoute>
        
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/stories",
        element:<Stories/>
      },
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
