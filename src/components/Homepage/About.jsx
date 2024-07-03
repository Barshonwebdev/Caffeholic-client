import { Link } from "react-router-dom";
import aboutimg from "../../assets/about.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white text-amber-900">
        <div className="hero-content flex-col-reverse lg:flex-row">
          <div className="lg:mr-32 lg:px-24 px-2">
            <h1 className="text-7xl font-bold text-center mt-2 title-font">
              Caffeholic
            </h1>
            <p className="py-6 text-justify">
              Welcome to Caffeholic, your go-to platform for coffee enthusiasts
              to explore, share, and celebrate the world of coffee. Whether
              you&apos;re a barista, a home brewer, or simply a coffee lover,
              Caffeholic offers a vibrant community where you can: <p className="mt-5 mb-2 link-font text-xl lg:text-2xl">
               <IoCheckmarkDoneSharp className="text-2xl inline text-amber-900 mr-1"></IoCheckmarkDoneSharp> Discover
              unique coffee recipes and brewing techniques.</p>


                <p className="mt-5 mb-2 link-font lg:text-2xl text-xl"><IoCheckmarkDoneSharp className="text-2xl inline text-amber-900 mr-1"></IoCheckmarkDoneSharp>Share your coffee
              experiences, photos, and reviews.</p>
              
               <p className="mt-5 mb-5 link-font lg:text-2xl text-xl"><IoCheckmarkDoneSharp className="text-2xl inline text-amber-900 mr-1"></IoCheckmarkDoneSharp>Connect with other coffee
              aficionados and exchange tips.</p> Join us and dive into the rich,
              aromatic universe of coffee, one post at a time!
            </p>
            <div className="flex justify-center">
              <Link to={'/coffees'}><button className="btn bg-amber-900 text-white text-2xl font-extralight link-font hover:bg-amber-950">Explore Coffeeposting!</button></Link>
            </div>
          </div>
          <img src={aboutimg} className="" />
        </div>
      </div>
    </div>
  );
};

export default About;
