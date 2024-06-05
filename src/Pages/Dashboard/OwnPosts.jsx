import React, { useEffect, useState } from "react";
import Drawer from "../../components/DashboardComponents/Drawer";
import useAuth from "../../Hooks/useAuth";
import SingleFeaturePost from "../../components/Homepage/SingleFeaturePost";

const OwnPosts = () => {
    const [ownPosts,setOwnPosts]=useState([]);
    const {user}=useAuth();
  useEffect(()=>{
    fetch(`https://caffeholic-server.vercel.app/postsown?email=${user?.email}`)
    .then((res)=>res.json())
    .then(data=>setOwnPosts(data))
  },[user?.email])
  return (
    <div>
      <Drawer></Drawer>
      <div className="mb-20 mt-10">
        <h1 className="text-center text-5xl title-font font-semibold text-amber-900 mb-10">
          {" "}
          Check out your own coffeeposts!
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 mb-10 mx-4">
          {ownPosts.map((post) => (
            <SingleFeaturePost isDashboard={true} key={post.id} post={post}></SingleFeaturePost>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnPosts;
