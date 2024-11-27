import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoPlayCircleOutline } from "react-icons/io5";
import laptopImage from "../assets/laptop.png";

const Home = () => {
  return (
    <div className="bg-re-400 h-full w-full flex flex-col gap-10   items-center ">
      {/* <-----hero section start----->  */}
      <section className="w-full flex flex-col h-full mt-20 justify-center items-center gap-10">
        <div className="bg-[#F9F5FF] flex items-center text-primary justify-center gap-3 h-9 px-1 rounded-full">
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

        <p className="w-1/3 text-secondary text-center">
          Powerfull, self-serve product and growth analytics to help you
          convert, engage, and retain more users. Trust by over 4,000 startups.
        </p>

        <div className="flex gap-5">
          <button className="bg-white border border-gray-200 flex hover:bg-gray-100 items-center gap-1 h-11 text-gray-700 rounded py-2 px-3">
            {" "}
            <IoPlayCircleOutline />
            Demo
          </button>
          <button className="bg-primary text-white rounded hover:bg-opacity-80 py-2 px-3">
            Sign up
          </button>
        </div>
      </section>

      {/* <-----hero section end----->  */}

      {/* <-----laptop image ----->  */}
      <div className="">
        <img className="w-4/5 mx-auto"  src={laptopImage} alt="laptop image" />
      </div>
    </div>
  );
};

export default Home;
