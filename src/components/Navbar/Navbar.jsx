import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const Navbar = () => {

  const {user} = useContext(AuthContext);

  const navlinks = (
    <>
      <li >
        <NavLink to='/'>Home</NavLink>
      </li>
      <li >
        <NavLink to='/venue'>Venue</NavLink>
      </li>
      <li >
        <NavLink to='/suppliers'>Suppliers</NavLink>
      </li>
      <li >
        <NavLink to='/about'>About</NavLink>
      </li>
      <li >
        <NavLink to='/media'>Media</NavLink>
      </li>
      <li >
        <NavLink to='/contactUs'>Contact Us</NavLink>
      </li>

      
    </>
  );
  return (
    <div className="navbar bg-[#D0E7D2] shadow-lg rounded-lg px-3 " data-aos="zoom-in" data-aos-duration="1000">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="italic text-orange-300 "><span className=" text-5xl font-bold italic text-red-300">SRH</span> Event Magic</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navlinks}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row  gap-3  ml-8 lg:ml-0">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {
                user && <img src={user.photoURL} alt="" />
              }
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-sm  btn-ghost">
                {
                  user && user.displayName
                }
              </button>
            </li>
            <li>
              <button className="btn btn-sm  btn-ghost">Logout</button>
            </li>
          </ul>
        </div>
        <Link to='/login'>
        <button className="btn">Login</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
