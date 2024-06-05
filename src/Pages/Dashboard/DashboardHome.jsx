import React from "react";
import Drawer from "../../components/DashboardComponents/Drawer";
import useAuth from "../../Hooks/useAuth";
import headerImg from '../../assets/coffee.png'

const DashboardHome = () => {
  const {user}=useAuth();
  return (
   <div className="">
     <Drawer/>
     <div>
     <h1 className="text-center text-5xl text-amber-900 title-font my-8">Caffeholic Dashboard</h1>

     <div className=" flex items-center justify-center flex-col-reverse md:flex-row-reverse md:space-x-12 ">
     <div className="my-5 md:my-0 md:mx-10  card  items-center rounded border-amber-900   lg:w-96 shadow-2xl  shadow-amber-900 ">
     <h1 className="text-center text-3xl font-bold text-amber-900 title-font my-1">Profile</h1>
        <figure className="px-5 pt-2">
          <img src={user?.photoURL} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className=" items-center p-5 ">
        <h1 className="text-center text-2xl font-bold text-amber-900 title-font my-1">Username: {user.displayName}</h1>
        <h1 className="text-center text-2xl font-bold text-amber-900 title-font my-1">Email: {user.email}</h1>
        <div className="flex justify-center mt-4">
        <button className="btn btn-sm text-white bg-amber-900 hover:bg-amber-950">Edit Profile</button>
        </div>
        </div>
      </div>
     <div className="md:mx-2 card items-center  rounded border-amber-900   lg:w-96 shadow-2xl shadow-amber-900 ">
     <h1 className="text-center text-3xl font-bold text-amber-900 title-font my-1">Caffeholic Stats</h1>
        <figure className="px-5 pt-2">
          <img src={headerImg}  className="rounded-lg w-16" />
        </figure>
        <div className=" items-center p-5 ">
        <h1 className="text-center text-2xl font-bold text-amber-900 title-font my-1">Username: {user.displayName}</h1>
        <h1 className="text-center text-2xl font-bold text-amber-900 title-font my-1">Email: {user.email}</h1>
       
        </div>
      </div>
     
    
       
      </div>
     </div>
   </div>
  );
};

export default DashboardHome;
