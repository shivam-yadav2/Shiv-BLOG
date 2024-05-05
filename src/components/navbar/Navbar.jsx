import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='w-full shadow-lg shadow-gray-900'>
      <div className="grid grid-cols-12 sm:px-5 md:py-4 sm:py-2 md:px-8 ">
        <div className="md:col-span-2 border-gray-600 border-e-2">
          <NavLink to={"/"} className='flex items-end'>
            <h1 className=' text-5xl font-bold logo'>B's</h1>
            <p className='sub-logo  mx-3 text-3xl'>Blogs</p>
          </NavLink>
        </div>
        <div className="md:col-span-7 border-gray-600 border-e-2 flex items-center">
          <ul className='flex md:mx-[120px] justify-between w-full'>
            <li>
              <NavLink>
                <h2>Home</h2>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <h2>Blogs</h2>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <h2>Trends</h2>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <h2>Dashboard</h2>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <h2>About</h2>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <NavLink className=''>
            <img src="https://t4.ftcdn.net/jpg/02/44/43/69/240_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg" alt="" className='rounded-[50%] w-[45px] border-2 border-gray-500 ' />
          </NavLink>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
