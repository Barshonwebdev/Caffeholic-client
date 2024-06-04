import React from "react";
import img1 from '../../assets/review1.jpg'
import img2 from '../../assets/review2.jpg'
const Review = () => {
  return (
    <div className="mx-10 mt-5 text-amber-900">
        <h1 className="text-5xl text-center mb-10 title-font text-amber-900 font-bold">What bigshots say about us..</h1>
      <div className="hero lg:w-1/2  ">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={img1}
            className="max-w-sm rounded-lg shadow-2xl w-3/4 md:w-1/2"
          />
          <div className="text-center lg:text-start">
            <h1 className="text-3xl font-bold title-font">Robert Jonas</h1>
            <p className="italic">Sales Manager, Caribou Coffee</p>
            <p className="py-6 title-font text-2xl font-bold">
            Absolutely love this site! The community is amazing, and I enjoy sharing my coffee photos and discovering new coffee ideas daily. Highly recommend to all coffee enthusiasts. It&apos;s a coffee lover&apos;s paradise!
            </p>
          </div>
        </div>
      </div>
     <div className="flex justify-end">
     <div className="hero lg:w-1/2  ">
        <div className="hero-content flex-col-reverse lg:flex-row justify-end">
         
          <div className="text-center lg:text-start">
            <h1 className="text-3xl font-bold title-font">Catherine Emma</h1>
            <p className="italic">CEO, Starbucks Coffees</p>
            <p className="py-6 title-font text-2xl font-bold">
            This site is a coffee lover&apos;s dream! Fantastic photo sharing, engaging community, and beautiful coffee inspiration. It&apos;s my go-to website for all things coffee. Perfect for connecting with fellow coffee enthusiasts!
            </p>
          </div>
          <img
            src={img2}
            className="max-w-sm rounded-lg shadow-2xl w-3/4 md:w-1/2"
          />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Review;
