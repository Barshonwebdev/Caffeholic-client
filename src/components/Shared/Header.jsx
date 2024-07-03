
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import headerImg from '../../assets/coffee.png'
import Swal from "sweetalert2";
const Header = () => {
  const {user,userLogout}=useAuth();
  const handleLogout=()=>{
    Swal.fire({
      title: "Are you sure you wanna logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log me out!"
    }).then((result) => {
      if (result.isConfirmed) {
        userLogout();
        Swal.fire({
          title: "Logged out!",
          icon: "success",
        });
      }
    });
   
  }
  return (
    <div className="navbar bg-amber-900 bg-opacity-45  flex items-center">
         
      <div className="dropdown md:hidden text-amber-900">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  px-1 text-2xl link-font ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/coffees"}>Coffee Feed!!</Link>
          </li>
          <li>
            <Link to={"/stories"}>Stories</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/dashboardlayout"}>Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="mr-4 title-font">
        <Link to={"/"} className="btn ps-1 btn-ghost text-5xl text-amber-900">
          Caffeholic <img className="w-10" src={headerImg} alt="" />
        </Link>
        
      </div>
      <div className="md:flex hidden  text-amber-900  link-font  ">
        <ul className="menu menu-horizontal px-1 text-2xl md:text-xl lg:text-2xl ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/coffees"}>Coffee Feed!!</Link>
          </li>
          <li>
            <Link to={"/stories"}>Stories</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/dashboardlayout"}>Dashboard</Link>
          </li>
        </ul>
      </div>
      {
        user? <div className=" absolute right-3">
        <Link onClick={handleLogout}><button className="btn text-xl font-extralight link-font  bg-base-200 text-amber-900 ">Logout</button></Link>
      </div> : <div className="absolute right-3">
        <Link  to={'/login'} ><button className="btn link-font text-xl font-extralight hover:bg-amber-950 bg-amber-900 text-white">Login</button></Link>
      </div>
      }
      <div>
        <img className="md:w-4 w-7 lg:w-10 absolute right-24 rounded-full " src={user.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Header;
