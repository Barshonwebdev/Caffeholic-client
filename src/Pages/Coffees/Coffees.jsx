import React, { useEffect, useState } from "react";
import headerImg from '../../assets/coffee.png'
import SinglePost from "./SinglePost";

const Coffees = () => {
  const [posts,setPosts]=useState([]);   
  const [searchText, setSearchText] = useState(""); //state for storing the search keyword
  const [filteredPosts, setFilteredPosts] = useState([]); //state for storing the filtered posts

  useEffect(()=>{
    fetch('https://caffeholic-server.vercel.app/coffeeposts')
    .then(res=>res.json())
    .then(data=>{
        setPosts(data);
        setFilteredPosts(data);
    })
  },[])

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearchText(searchWord);

    // filtering by either firstname or username
    const filtered = posts.filter(
      (post) =>
        post.coffee_name.toLowerCase().includes(searchWord.toLowerCase())
    );

    setFilteredPosts(filtered);
  };
  return (
    <div className="min-h-screen">
      <div className="lg:mb-20 mb-10 mt-10">
        <div className="flex flex-col items-center justify-center space-x-8 mb-16">
        <h1 className="order-2 text-center text-3xl lg:text-5xl title-font font-semibold text-amber-900 ">
          {" "}
          Welcome to your coffee feed 
        </h1>
        <img className="w-10 inline order-1" src={headerImg} alt="" />
        </div>
        
        <div className="sticky top-5 right-5 z-10  ">
          
            <input
              type="text"
              placeholder="Search Posts"
              className="input lg:w-1/4  w-1/2 input-bordered  mx-auto ml-3"
              onChange={handleSearch}
              value={searchText}
            />
          
        </div>
        <div className="grid  grid-cols-1 gap-5 mt-5 mb-10 mx-4">
          {filteredPosts.map((post) => (
            <SinglePost key={posts.id} post={post}></SinglePost>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffees;
