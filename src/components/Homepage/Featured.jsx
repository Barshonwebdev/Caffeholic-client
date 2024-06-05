import { useEffect, useState } from "react";
import SingleFeaturePost from "./SingleFeaturePost";

const Featured = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch('https://caffeholic-server.vercel.app/coffeeposts')
        .then((res)=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div className="mb-20 mt-10">
        <h1 className='text-center text-5xl title-font font-semibold text-amber-900 mb-10'> Weekly featured posts!!</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 mb-10 mx-4'>
        {
            posts.slice(1,4).map(post=><SingleFeaturePost key={post.id} post={post}></SingleFeaturePost>)
        }
    </div>
    </div>
    );
};

export default Featured;