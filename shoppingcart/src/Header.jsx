import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-slate-700 px-6 py-3 flex justify-around text-white text-xl  items-center ">
      <Link to="/">Shopping cart </Link>
      <input
        type="text"
        placeholder="Search a product..."
        className="px-5 py-1 rounded-md border-2 border-gray-600 w-72"
      />
      <button
        className="cursor-pointer relative"
        onClick={() => setShowMenu(!showMenu)}
      >
        {" "}
        <FaShoppingCart />{" "}
      </button>
      {showMenu && (
        <div className="bg-slate-50 border-2 border-gray-500 w-72 h-72 p-5 mt-2 absolute right-20 top-14 text-black">
          <h1> cart is empty </h1>
        </div>
      )}
    </nav>
  );
}
