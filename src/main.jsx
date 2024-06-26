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
import Dashboard from './Layout/Dashboard.jsx';
import DashboardHome from './Pages/Dashboard/DashboardHome.jsx';
import AddPost from './Pages/Dashboard/AddPost.jsx';
import OwnPosts from './Pages/Dashboard/OwnPosts.jsx';
import Editpost from './Pages/Dashboard/Editpost.jsx';
import EditProfile from './Pages/Dashboard/EditProfile.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement:<ErrorPage></ErrorPage>,
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
  },
  {
    path:'/dashboardlayout',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'/dashboardlayout',
        element:<DashboardHome></DashboardHome> 
      },
      {
        path:'/dashboardlayout/addpost',
        element:<AddPost></AddPost>
      },
      {
        path:'/dashboardlayout/ownposts',
        element:<OwnPosts></OwnPosts>
      },
      {
        path:'/dashboardlayout/editpost/:id',
        element:<Editpost></Editpost>,
        loader:({params})=>fetch(`https://caffeholic-server.vercel.app/coffeeposts/${params.id}`)
      },
      {
        path:'/dashboardlayout/editprofile/:email',
        element:<EditProfile></EditProfile>,
        loader:({params})=>fetch(`https://caffeholic-server.vercel.app/user/${params.email}`)
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
