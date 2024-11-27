import React from "react";
import logo from "../../../CleaningWebsite/public/logo.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-36 h-20 w-full">
      {/* logo */}
      <div className="">
        <img className="w-20" src={logo} alt="nimbus logo" />
      </div>

      {/* navlinks  */}
      <div className=" flex gap-12 ">
        <ul className="flex gap-10 items-center font-semibold">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Contact</li>
            <li className="">Pricing</li>
        </ul>
        <button className="bg-primary shadow-sm  text-white px-5 py-2 rounded">Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
