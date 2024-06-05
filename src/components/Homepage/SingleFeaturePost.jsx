import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleFeaturePost = ({ post, isDashboard,onDelete }) => {
  const token=localStorage.getItem('token');

  const {
    _id,
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
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://caffeholic-server.vercel.app/postsown/${_id}`, {
          method: "DELETE",
          headers:{
            'Content-type':'application/json',
            authorization:`Bearer ${token}`
        },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Coffeepost has been deleted.",
              icon: "success",
            });
            onDelete(_id);
          });
      }
    });
  };
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
           <Link to={`/dashboardlayout/editpost/${_id}`}><button className="btn bg-white text-amber-900 font-bold">Edit</button></Link>
           <button onClick={handleDelete} className="btn bg-white text-amber-900 font-bold">Delete</button>
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
