import React, { useEffect, useState } from 'react';
import Drawer from '../../components/DashboardComponents/Drawer';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const Editpost = () => {
    const { user } = useAuth();
    const postData=useLoaderData();
    console.log(postData);
    // const {_id,coffee_name,origin,color,description,short_recipe,personal_experience,type,photoURL,poster,poster_email}=postData;
    const[name,setName]=useState(postData.coffee_name);
    const[origin,setOrigin]=useState(postData.origin);
    const[color,setColor]=useState(postData.color);
    const[description,setDescription]=useState(postData.description);
    const[recipe,setRecipe]=useState(postData.short_recipe);
    const[experience,setExperience]=useState(postData.personal_experience);
    const[type,setType]=useState(postData.type);
    const[photo,setPhoto]=useState(postData.photoURL);
    const[poster,setPoster]=useState(postData.poster);
    const[email,setEmail]=useState(postData.poster_email);


  const token = localStorage.getItem("token");
  const [thisUser, setThisUser] = useState({});
  useEffect(() => {
    fetch(`https://caffeholic-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setThisUser(data));
  }, [user?.email]);
  const handleEditPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffee_name = form.name.value;
    const origin = form.origin.value;
    const color = form.color.value;
    const description = form.description.value;
    const personal_experience = form.experience.value;
    const photoURL = form.photo_url.value;
    const type = form.type.value;
    const short_recipe = form.recipe.value;
    
    const postUpdateData = {
      poster,
      poster_email:email,
      coffee_name,
      description,
      photoURL,
      origin,
      short_recipe,
      personal_experience,
      type,
      color,
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
        fetch(`https://caffeholic-server.vercel.app/coffeeposts/${postData._id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postUpdateData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Coffeepost Edited!!");
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
          Edit Coffepost!
        </h1>
        <div className="hero  ">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-amber-900 shadow-2xl bg-base-100">
              <form
                onSubmit={handleEditPost}
                className="card-body grid grid-cols-2 gap-x-10"
              >
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Coffee Name</span>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Origin</span>
                  </label>
                  <input
                    type="text"
                    name="origin"
                    placeholder="origin"
                    className="input input-bordered"
                    value={origin}
                    onChange={(e)=>setOrigin(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Color</span>
                  </label>
                  <input
                    type="text"
                    name="color"
                    placeholder="color"
                    className="input input-bordered"
                    value={color}
                    onChange={(e)=>setColor(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Hot/Frozen"
                    className="input input-bordered"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    className="input input-bordered"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Recipe</span>
                  </label>
                  <input
                    type="text"
                    name="recipe"
                    placeholder="short recipe"
                    className="input input-bordered"
                    value={recipe}
                    onChange={(e)=>setRecipe(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Personal Experience</span>
                  </label>
                  <input
                    type="text"
                    name="experience"
                    placeholder="experience"
                    className="input input-bordered"
                    value={experience}
                    onChange={(e)=>setExperience(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo_url"
                    placeholder="photo url"
                    className="input input-bordered"
                    value={photo}
                    onChange={(e)=>setPhoto(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control mt-6 col-span-2">
                  <button className="btn text-white bg-amber-900 hover:bg-amber-950">
                    Edit Coffepost
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

export default Editpost;