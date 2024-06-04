import React from "react";

const FAQ = () => {
  return (
    <div className="my-16 text-amber-900">
      <h1 className="text-4xl text-center mx-4 font-semibold title-font">Frequently Asked Questions</h1>
      <div className="flex justify-center mt-10 mx-4">
        <div className="join join-vertical md:w-1/2  ">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold title-font">
            How do I upload a coffee post?
            </div>
            <div className="collapse-content"> 
              <p className="font-semibold">
              To upload a coffee photo, click the coffeepost button on your dashboard. Select your photo url , add an engaging caption and relevant tags, and then simply hit post. Your entire post will be shared with the community and appear in the coffees page.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold title-font">
            What if I am not a coffee lover?
            </div>
            <div className="collapse-content"> 
              <p className="font-semibold">
              Even if you are not a coffee lover, you can still enjoy our community by appreciating the artistry in coffee photography, learning about coffee culture, and connecting with friends who are passionate about coffee. Everyone is welcome to join and explore!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-2xl font-bold title-font">
            Is creating an account free?
            </div>
            <div className="collapse-content"> 
              <p className="font-semibold">
              Yes, creating an account on our webapp is completely free. Sign up to explore all features, including dashboard for coffeeposting, see all other posts, venturing recipes, and participating in community events. Join us and become a part of the coffee lovers&apos; community!
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default FAQ;
