import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoPlayCircleOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="bg-re-400 h-screen w-full flex flex-col gap-10 justify-center items-center ">
      <div className="bg-gray-200 flex items-center text-primary justify-center gap-3 h-9 px-1 rounded-full">
        <p className="bg-white rounded-full h-7 px-2 ">New Feature</p>
        <p className="flex items-center gap-2 pr-2">
          Check out the team dashboard{" "}
          <span>
            <HiOutlineArrowRight />
          </span>
        </p>
      </div>

      <h1 className="text-5xl w-[30%] text-center font-semibold">
        Get Cloud Point of Sale for your Brand
      </h1>

      <p className="w-1/3 text-gray-500 text-center">
        Powerfull, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trust by over 4,000 startups.
      </p>

      <div className="flex gap-5">
        <button className="bg-white border border-gray-200 flex items-center gap-1 h-11 text-gray-700 rounded py-2 px-3"> <IoPlayCircleOutline />Demo</button>
        <button className="bg-primary text-white rounded py-2 px-3">Sign up</button>
      </div>
    </div>
  );
};

export default Home;
