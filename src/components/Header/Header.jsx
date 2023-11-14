import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import RegisterModal from "../Register/RegisterModal";
import Login from "../Login/Login";
//import RegisterModal from "../../Register/RegisterModal";

export default function Header({ cart, toggleCart }) {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const openLogin = () => {
    setShowLogin((prev) => !prev);
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-[#eaeced] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:hover:text-orange-700  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={openLogin}
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-gray-800 hover:text-orange-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={openModal}
            >
              Register
            </Link>
            <button
              onClick={toggleCart}
              className="text-gray-800 hover:text-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              aria-label="My Cart"
            >
              <div className="relative inline-block">
                <BsCart2 className="w-10 h-10" />
                <p className="absolute top-2 right-3 bg-orange-700 text-white rounded-full px-1 text-xs">
                  {cart.length}
                </p>
              </div>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showModal && <RegisterModal showModal={showModal} setShowModal={setShowModal} />}
      {showLogin && <Login />} {/* Render the Login component when showLogin is true */}
    </header>
  );
}
