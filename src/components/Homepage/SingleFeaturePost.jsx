import React from "react";

const SingleFeaturePost = ({ post, isDashboard }) => {
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
      <div className="card rounded w-full lg:w-96 bg-amber-900 bg-opacity-85 text-white shadow-xl">
        <figure className="px-5 pt-5">
          <img src={photoURL}  className="rounded-lg" />
        </figure>
        <div className=" items-center p-5 ">
          <p className=" title-font text-2xl">Posted by: {poster}</p>
          <hr className="mb-5" />
          <h2 className="card-title title-font text-4xl">{coffee_name}</h2>
          <p className="my-2 title-font text-xl">{description}</p>
          <h2 className="">Origin: {origin}</h2>
          <p>Color: {color}</p>
          <p>Quick Recipe: {short_recipe}</p>
          <p className="my-2">Type: {type}</p>
          <p className="my-2">Personal experience: {personal_experience}</p>
         { isDashboard?
           <div className="flex justify-between mt-5">
           <button className="btn bg-white text-amber-900 font-bold">Edit</button>
           <button className="btn bg-white text-amber-900 font-bold">Delete</button>
         </div> : <div className=" justify-between mt-5 hidden">
           <button className="btn bg-white text-amber-900 font-bold">Edit</button>
           <button className="btn bg-white text-amber-900 font-bold">Delete</button>
         </div>
         }
        </div>
      </div>
    </div>
  );
};

export default SingleFeaturePost;
