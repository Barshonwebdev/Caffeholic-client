import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = () => {
    return (
        <div>
<div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex justify-center my-5">
        <label htmlFor="my-drawer-4" className="drawer-button text-white btn bg-amber-900 hover:bg-amber-950">
          Open Coffee dashboard menu
        </label>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-56 md:w-80 min-h-full bg-amber-900 text-white ">
          {/* Sidebar content here */}
        
            <Link to={'/dashboardlayout'}>home</Link>
            <Link to={'/dashboardlayout/addpost'}>blogs</Link>
          
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
        </div>
    );
};

export default Drawer;