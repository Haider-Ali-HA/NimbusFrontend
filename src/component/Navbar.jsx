import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-36 h-28 w-full">
      {/* logo */}
      <div className="flex gap-2">
        <img className="w-20" src={logo} alt="nimbus logo" />
        <h1 className="font-bold text-3xl w-32">Nimbus 360</h1>
      </div>

      {/* navlinks  */}
      <div className=" flex gap-12 ">
        <ul className="flex gap-10 items-center font-semibold">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Contact</li>
            <li className="">Pricing</li>
        </ul>
        <button className="bg-primary shadow-sm hover:bg-opacity-80  text-white px-5 py-2 rounded">Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
