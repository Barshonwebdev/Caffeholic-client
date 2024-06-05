import React, { useEffect, useState } from "react";
import Drawer from "../../components/DashboardComponents/Drawer";
import useAuth from "../../Hooks/useAuth";
import headerImg from '../../assets/coffee.png'

const DashboardHome = () => {
  const {user}=useAuth();
  const [thisUser,setThisUser]=useState({});
  useEffect(()=>{
    fetch(`https://caffeholic-server.vercel.app/user/${user?.email}`)
    .then((res)=>res.json())
    .then(data=>setThisUser(data))
  },[])
  const [stats,setStats]=useState({});
  useEffect(()=>{
    fetch(`https://caffeholic-server.vercel.app/stats`)
    .then((res)=>res.json())
    .then(data=>setStats(data))
  },[])
  const [ownStats,setOwnStats]=useState([]);
  useEffect(()=>{
    fetch(`https://caffeholic-server.vercel.app/statsown?email=${user?.email}`)
    .then((res)=>res.json())
    .then(data=>setOwnStats(data))
  },[user?.email])
  return (
   <div className="">
     <Drawer/>
     <div>
     <h1 className="text-center text-5xl text-amber-900 title-font my-8">Caffeholic Dashboard</h1>

     <div className=" flex items-center justify-center flex-col md:flex-row-reverse md:space-x-12 ">
     <div className="my-5 md:my-0 md:mx-10  card  items-center rounded border-amber-900   lg:w-96 shadow-2xl  shadow-amber-900 ">
     <h1 className="text-center text-3xl font-bold text-amber-900 title-font my-1">Profile</h1>
        <figure className="px-5 pt-2">
          <img src={thisUser?.photo} className="rounded-lg w-36" />
        </figure>
        <div className=" items-center p-5 ">
        <h1 className="text-center text-2xl font-bold text-amber-900 title-font my-1">Username: {thisUser.name}</h1>
        <h1 className="text-center text-2xl font-bold text-amber-900 title-font my-1">Email: {thisUser.email}</h1>
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
        <h1 className="text-center text-3xl font-bold text-amber-900 title-font my-1">Total posts made: {stats.posts}</h1>
        <h1 className="text-center text-3xl font-bold text-amber-900 title-font my-1">Total users: {stats.users}</h1>
        <h1 className="text-center text-3xl font-bold text-amber-900 title-font my-1">You made:{ownStats.length} posts!</h1>
       
        </div>
      </div>
     
    
       
      </div>
     </div>
   </div>
  );
};

export default DashboardHome;
