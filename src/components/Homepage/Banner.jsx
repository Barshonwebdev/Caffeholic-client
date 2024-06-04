import banner from "../../assets/ezgif-frame-001.png";
const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-15"></div>
        <div className="hero-content text-center text-white ">
          <div className="max-w-xl ">
            <h1 className="mb-5 text-5xl lg:text-7xl font-bold title-font">Enter the world of Caffeholic!</h1>
            <p className="mb-5 text-4xl title-font">The place for your own coffeeposting...</p>
            
          </div>
        </div>
      </div>
  );
};

export default Banner;

