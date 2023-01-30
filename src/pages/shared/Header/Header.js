import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navMenu = (
    <>
      <Link to="/" className="hover:border-b-2 border-orange-700  p-2 mr-2">
        Home
      </Link>
      <Link to="/" className="hover:border-b-2 border-orange-700  p-2">
        Dashboard
      </Link>
    </>
  );
  return (
    <header className="bg-base-200 shadow-md">
      <div className="navbar  lg:max-w-7xl mx-auto">
        <div className="navbar-start  ">
          <div className="dropdown ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-white rounded-box w-64 "
            >
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">TechNeto</a>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal px-1 hidden lg:flex font-semibold">
            {navMenu}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
