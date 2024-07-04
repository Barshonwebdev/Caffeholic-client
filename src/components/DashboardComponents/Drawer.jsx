import React from 'react';
import { Link } from 'react-router-dom';
import { SiCoffeescript } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFeed } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa"; 

const Drawer = () => {
    return (
        <div>
<div className="drawer drawer-end bg-amber-900 bg-opacity-75">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex justify-center my-5 ">
        <label htmlFor="my-drawer-4" className="drawer-button text-white btn bg-amber-900 hover:bg-amber-950">
          Open Caffeholic dashboard menu
        </label>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="space-y-2 text-xs lg:text-lg font-semibold menu p-4 md:w-44 w-40 lg:w-80 min-h-full bg-amber-900   text-white ">
          {/* Sidebar content here */}
            <h1 className='text-center title-font text-sm md:text-2xl mb-2 md:mb-10'>Caffeholic Dashboard Menu</h1>
            <Link to={'/dashboardlayout'}><FaArrowLeft className='inline me-2'></FaArrowLeft>Dashboard Main</Link>
            <Link to={'/dashboardlayout/addpost'}><SiCoffeescript className='inline me-2'></SiCoffeescript>Post Coffees!</Link>
            <Link to={'/dashboardlayout/ownposts'}><MdOutlineFeed className='inline me-2'></MdOutlineFeed>Own coffeeposts</Link>
            <Link to={'/'}><IoHomeOutline className='inline me-2'></IoHomeOutline>Back to home</Link>
            
        </ul>
      </div>
    </div>
        </div>
    );
};

export default Drawer;