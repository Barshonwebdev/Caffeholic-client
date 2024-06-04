import React from "react";

const Contact = () => { 
  return (
    <div className="mt-10 text-amber-900 mb-5">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left lg:ml-24 md:px-24">
            <h1 className="text-6xl title-font font-bold">Contact Us!</h1>
            <p className="py-6 lg:pe-12">
              If you have any kind of query or issues, send us a mail right away and we will attend to it immediately!
            </p>
          </div>
          <div className="lg:ml-24 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Query</span>
                </label>
                <textarea placeholder="mention your query here"  className="border-base-300 border rounded-lg ps-3 pt-2" name="" id=""></textarea>
                
              </div>
              <div className="form-control mt-6">
              <button className="btn bg-amber-900 text-white text-xl font-extralight link-font hover:bg-amber-950">Send Query!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
