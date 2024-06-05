import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import img1 from "../assets/logincoffee.png"
import img2 from "../assets/logincoffee2.png"
const Login = () => {
  const { googleLogin, user, githubLogin, signIn } = useAuth();
  const navigate=useNavigate();
  const location=useLocation();
  const from=location?.state?.from?.pathname || '/';
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    signIn(email, pass).then(() => {
      e.target.reset();
      if(user){
        navigate(from);
      }
    });
  };
  const handleGoogleLogin = () => {
    googleLogin()
    .then(data=>{
      console.log(data);
      if(data?.user?.email){
        const userInfo={
          email:data?.user?.email,
          name:data?.user?.displayName,
          verified:data?.user?.emailVerified,
              photo:data?.user?.photoURL
        }
        fetch(`https://caffeholic-server.vercel.app/user`,{
          method:"POST",
          headers: {
            "Content-type":"application/json"
          },
          body:JSON.stringify(userInfo)
        })
        .then((res)=>res.json())
        .then(data=>{
          localStorage.setItem('token',data?.token)
          console.log(data)})
      }
      navigate(from);
    })
    
  };
  const handleGithubLogin = () => {
    githubLogin()
    .then(data=>{
      console.log(data);
      if(data?.user?.email){
        const userInfo={
          email:data?.user?.email,
          name:data?.user?.displayName,
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
      navigate(from);
    })
    
  };
  return (
    


      <div className="bg-amber-900 bg-opacity-75 min-h-screen flex items-center">
        <div className="hero  ">
          <div className="hero-content flex-col lg:space-x-28 lg:flex-row-reverse">
            <div className="text-center lg:text-left px-5 lg:ml-10">
              <h1 className="text-5xl font-bold text-white title-font">Login at Caffeholic!!</h1>
             
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                  
                  <div>                    
                  </div>
                </div>
                <div className="form-control mt-6 gap-2">
                  <button className="btn hover:bg-amber-950 text-white bg-amber-900">
                    Login
                  </button>
                  <p className="text-center">Or,</p>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black hover:bg-base-300"
                  >
                    <FcGoogle className="text-xl"></FcGoogle> Continue with
                    Google
                  </button>
                  <button
                    onClick={handleGithubLogin}
                    className="btn bg-gray-500 text-white hover:bg-gray-700"
                  >
                    <FaGithub className="text-xl"></FaGithub> Continue with
                    Github
                  </button>
                  <small className="text-center">
                    By continuing, you agree to Caffeholic&apos;s Terms of
                    Service; and acknowledge you&apos;ve read our Privacy
                    Policy.
                  </small>
                  <hr className="w-36 mx-auto" />
                  <Link to="/register" className="mx-auto">
                    <p className=" text-sm font-semibold">
                      Not yet on Caffeholic? Sign up!
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 mb-2 right-36 md:right-14 md:bottom-16 lg:right-20 lg:bottom-28">
            <img className="w-32" src={img1} alt="" />
        </div>
        <div className="absolute top-0 mt-2 left-44 md:left-14 md:top-16 lg:left-20 lg:top-28">
            <img className="w-20" src={img2} alt="" />
        </div>
      </div>
    
  );
};

export default Login;
