import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import img1 from "../assets/logincoffee2.png"
import img2 from "../assets/logincoffee.png"
const Register = () => {
    const {createUser}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const from=location?.state?.from?.pathname || '/';
    const [confirm,setConfirm]=useState(true);
    const handleSignup=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.password.value;
        const confirmPass=form.confirmPassword.value;
        if(pass!==confirmPass){
          setConfirm(false);
          alert('Write your password again correctly');
          e.target.reset();
        }

        if(pass===confirmPass){
          createUser(email,pass)
        .then(data=>{
          console.log(data);
          if(data?.user?.email){
            const userInfo={
              email:data?.user?.email,
              name:name,
              verified:data?.user?.emailVerified,
              photo:data?.user?.photoURL
            }
            fetch(`http://localhost:5000/user`,{
              method:"POST",
              headers: {
                "Content-type":"application/json"
              },
              body:JSON.stringify(userInfo)
            })
            .then((res)=>res.json())
            .then(data=>console.log(data))
          }
          e.target.reset();
          navigate(from);
        })
        }
        
    }
    return (
        <div>
       
  
        <div>
          <div className="bg-amber-900 bg-opacity-75 hero min-h-screen ">
            <div className="hero-content flex-col lg:space-x-12 lg:flex-row-reverse">
              <div className="text-center lg:text-left px-5 lg:ml-10">
                <h1 className="text-5xl font-bold text-white title-font">Register your account!</h1>
               
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignup} className="card-body">
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                    name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="confirm your password"
                      className="input input-bordered"
                      required
                    />
                    
                  </div>
                  <button className="btn mt-3 hover:bg-amber-950 text-white bg-amber-900">
                    Sign up
                  </button>
                  <Link to='/login' className="mx-auto mt-5">
                    <p className=" text-sm font-semibold">
                      Already on Caffeholic? Sign in!
                    </p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 mt-2 left-40 md:left-14 md:top-16 lg:left-20 lg:top-28">
            <img className="w-28" src={img2} alt="" />
        </div>
        <div className="absolute bottom-0 mb-2 right-40 md:right-14 md:bottom-16 lg:right-36 lg:bottom-28">
            <img className="w-20" src={img1} alt="" />
        </div>
      </div>
    );
};

export default Register;