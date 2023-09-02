
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/products",
    display: "Products",
  },
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const items = useSelector((state: any) => state.cart);
  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="fixed z-50 top-0 left-0 w-full shadow-lg bg-[lightgrey]">
      <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className=" text-3xl font-bold text-[darkcyan]">O-Store</h1>
        <ul className="hidden md:flex">
          {NAV__LINK.map((item, index) => (
            <Link to={item.path} key={index}>
              <li className="p-4 hover:underline hover:text-[darkcyan] hover:bg-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                {item.display}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex text-3xl font-bold text-[darkcyan]">
          <Link className="p-4" to="/search-page">
            <AiOutlineSearch size={30} />
          </Link>
          {/* <div className="p-4 flex" onClick={handleCartClick}>
            <FaShoppingCart size={30} />
            <div className="ml-1 text-yellow-700 -mt-3 text-2xl">
              {items.length}
            </div>
          </div> */}
          <Link className="p-4 flex" to="/cart">
            <FaShoppingCart size={30} />
            <div className="ml-1 text-yellow-700 -mt-3 text-2xl">
              {items.length}
            </div>
          </Link>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold text-[darkcyan] m-4">
            NavBar
          </h1>
          <ul className="p-4 uppercase text-[darkcyan]">
            {NAV__LINK.map((item, index) => (
              <Link to={item.path} key={index}>
                <li className="p-4 border-b border-gray-600 hover:underline hover:text-[darkcyan] hover:bg-gray-200 hover:shadow-md transition duration-300 ease-in-out">
                  {item.display}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
