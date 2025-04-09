import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // React Router for navigation
import { FaShoppingCart, FaUserCircle } from "react-icons/fa"; // Importing icons from react-icons
import "../Share_Compo/Style.css"; // Your custom styles
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import DarkModeToggle from "../../DarkMode/DarkModeToggle";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [equipment, setEquipment] = useState([]);

  // handler logout
  const handlerLogout = () => {
    logOut()
      .then(() => {
        toast.success("User logged out successfully");
      })
      .catch((error) => {
        toast.error("Failed Logout");
        console.log("this logout problem", error);
      });
  };

  // equipment here
  useEffect(() => {
 
     fetch(
       `https://re-check-server-site-assign-10.vercel.app/add-equipment?email=${user?.email}`
     )
       .then((res) => res.json())
       .then((data) => {
         setEquipment(data);
       })
       .catch((error) => {
         console.log("this is error from all sport equipment", error);
       });
 
   }, [user?.email]);
 

  return (

    <div className="border-0 border-b-gray-300 ">
      <div className="container py-2 m-auto px-3 flex items-center  justify-between ">
        {/* Brand Section */}
        <div className="">
          <Link to="/" className="font-bold text-xl">
            EquiSports
          </Link>
        </div>

        {/* Navigation Links Section */}
        <div className="hidden lg:flex">
          <ul className="space-x-3 menu-item menu-horizontal px-1">
            {/* Home Link */}
            <li>
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>

            {/* Add Equipment Link */}
            <li>
              <NavLink to="/add-equipment" className="">
                Add Equipment
              </NavLink>
            </li>

            {/* All Sports Equipment Link */}
            <li>
              <NavLink to="/all-sport-equipment" className="">
                All Sports Equipment
              </NavLink>
            </li>

            {/* My Equipment Link */}
            <li>
              <NavLink to="/my-equipment" className="">
                My Equipment
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu - Dropdown for small screens */}
        <div className="lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-2 lg:hidden">
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
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/add-equipment">Add Equipment</NavLink>
              </li>
              <li>
                <NavLink to="/all-sport-equipment">
                  All Sports Equipment
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-equipment">My Equipment</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* User & Cart Sections */}
        <div className=" flex items-center">

          <div className="px-3">
            <DarkModeToggle></DarkModeToggle>
          </div>

          {user ? (
            <div>
              {/* Cart Icon and Dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator me-4">
                    {/* Shopping Cart Icon */}
                    <FaShoppingCart className="h-5 me-3 w-5" />
                    <span className="badge badge-sm bg-teal-500 text-white indicator-item">
                      +{equipment?.length}
                    </span>{" "}
                    {/* Cart Badge */}
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">
                      {" "}
                      Total item: {equipment?.length}
                    </span>

                    <div className="card-actions">
                      <Link
                        to="/my-equipment"
                        className="btn bg-teal-500 text-white btn-block"
                      >
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Avatar and Profile Dropdown */}

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 h-10 object-cover border-2  border-green-500 rounded-full">
                    <img alt="User Photo" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {/* Profile Dropdown Item */}

                  <li>
                    <div className="justify-between">
                      <span>Name : </span>

                      <p className="capitalize">
                        {user && <span>{user?.displayName || "User"}</span>}
                      </p>
                    </div>
                  </li>
                  {/* Settings Dropdown Item */}
                  <li>
                    <p>Setting</p>
                  </li>
                  {/* Logout Dropdown Item */}

                  <li>
                    <button onClick={handlerLogout}>
                      {user && <p>logout</p>}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-x-3">
              <Link to="/login">Login</Link>

              <Link to="/Register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
