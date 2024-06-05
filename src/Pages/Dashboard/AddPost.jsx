import React, { useEffect, useState } from "react";
import Drawer from "../../components/DashboardComponents/Drawer";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddPost = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const [thisUser, setThisUser] = useState({});
  useEffect(() => {
    fetch(`https://caffeholic-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setThisUser(data));
  }, [user?.email]);
  const handleAddPost = (e) => {
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
    const poster = thisUser.name;
    const poster_email = thisUser.email;
    const productData = {
      poster,
      poster_email,
      coffee_name,
      description,
      photoURL,
      origin,
      short_recipe,
      personal_experience,
      type,
      color,
    };
    console.log(productData);

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Post!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://caffeholic-server.vercel.app/coffeeposts", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Coffee posted!!");
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
          Make a Coffepost!
        </h1>
        <div className="hero  ">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-amber-900 shadow-2xl bg-base-100">
              <form
                onSubmit={handleAddPost}
                className="card-body grid grid-cols-2 gap-x-10"
              >
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Posted by</span>
                  </label>
                  <input
                    type="text"
                    name="poster"
                    defaultValue={user.displayName}
                    className="input input-bordered"
                    disabled
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Coffee Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
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
                    required
                  />
                </div>

                <div className="form-control mt-6 col-span-2">
                  <button className="btn text-white bg-amber-900 hover:bg-amber-950">
                    Coffepost
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

export default AddPost;
