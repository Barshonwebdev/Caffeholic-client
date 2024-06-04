import About from "../../components/Homepage/About";
import Banner from "../../components/Homepage/Banner";
import Contact from "../../components/Homepage/Contact";
import FAQ from "../../components/Homepage/FAQ";
import Review from "../../components/Homepage/Review";

const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner/>
           <About/>
           <Review/>
           <Contact/>
           <FAQ/>
        </div>
    );
};

export default Home;