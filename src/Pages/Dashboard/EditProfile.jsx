import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Drawer from '../../components/DashboardComponents/Drawer';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const userData=useLoaderData();
    const token = localStorage.getItem("token");
    console.log(userData);
    const [name,setName]=useState(userData.name)
    const [email,setEmail]=useState(userData.email)
    const [photo,setPhoto]=useState(userData.photo)

    const handleEditProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.photo.value;
        
        const profileUpdateData = {
          name,
          email,
          photo,
        };
    
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Edit!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://caffeholic-server.vercel.app/user/${email}`, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(profileUpdateData),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire("Profile Edited!!");
                form.reset();
              });
          }
        });
      };

    return (
        <div>
      <Drawer></Drawer>
      <div>
        <h1 className="my-3 text-5xl text-amber-900 title-font text-center">
          {" "}
          Edit Profile
        </h1>
        <div className="hero  ">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-amber-900 shadow-2xl bg-base-100">
              <form
                onSubmit={handleEditProfile}
                className="card-body grid grid-cols-2 gap-x-10"
              >
               
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="name"
                    className="input input-bordered"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </div>
               
                
               
               
               
               
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered"
                    value={photo}
                    onChange={(e)=>setPhoto(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control mt-6 col-span-2">
                  <button className="btn text-white bg-amber-900 hover:bg-amber-950">
                    Edit Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default EditProfile;