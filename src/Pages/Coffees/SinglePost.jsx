import React from "react";

const SinglePost = ({ post }) => {
  const {
    coffee_name,
    origin,
    color,
    short_recipe,
    description,
    personal_experience,
    type,
    poster,
    poster_email, 
    photoURL,
  } = post;
  return (
    <div>
      <div className="card w-full text-amber-900">
        <figure className="px-5 pt-5">
          <img src={photoURL} alt="Shoes" className="rounded lg:w-1/2 md:w-2/3" />
        </figure>
        <div className=" items-center p-5 ">
          <p className=" title-font text-xl md:text-3xl">Posted by: {poster}</p>
          <hr className="mb-5 border-2 border-amber-900" />
          <h2 className="card-title title-font text-5xl">{coffee_name}</h2>
          <p className="my-2 title-font text-xl md:text-3xl">{description}</p>
          <h2 className=""><span className="font-bold">Origin:</span> {origin}</h2>
          <p><span className="font-bold">Color:</span> {color}</p> 
          <p><span className="font-bold">Quick Recipe:</span> {short_recipe}</p>
          <p className="my-2"><span className="font-bold">Type:</span> {type}</p>
          <p className="my-2"><span className="font-bold">Personal Experience:</span> {personal_experience}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
