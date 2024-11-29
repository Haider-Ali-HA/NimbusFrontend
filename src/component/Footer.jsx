import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#FAFAFB] flex flex-col  gap-10 p-10 lg:px-28 lg:pt-28 font-inter w-full ">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
        <h1 className="font-semibold text-3xl lg:text-4xl w-full sm:w-2/4 lg:w-[31rem]">
          Learn how to grow {String.fromCodePoint(0x1f4aa)} audience fast in
          Twitter
        </h1>
        <button className="h-11 px-4 bg-black hover:bg-opacity-80  text-white rounded-full">
          Download Free Chapter
        </button>
      </div>
      <hr className="border-gray-300" /> {/* Changed class to border-red-500 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:grid-cols-5  ">
        <div className="sm:col-span-2 gap-2 grid">
          {" "}
          {/* Added col-span-2 */}
          <h1 className="text-lg font-semibold">About Rareblocks</h1>
          <p className="w-5/6 lg:w-3/4 text-gray-600">
            Rareblocks is a collection of beautifully designed, responsive UI
            blocks that can be used to build stunning websites quickly and
            easily. Our mission is to provide developers and designers with the
            tools they need to create amazing web experiences without having to
            start from scratch.
          </p>
          <div className="flex gap-5 my-6">
            <a href="">
              <FaTwitter className="text-xl" />
            </a>
            <a href="">
              <FaFacebook className="text-xl" />
            </a>

            <a href="https://www.instagram.com/hexlertech/">
              <FaInstagram className="text-xl" />
            </a>
            <a href="">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Company</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>About</li>
            <li>Features</li>
            <li>Work</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Help</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Customer</li>
            <li>Support</li>
            <li>DeliveryDetails</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Resources</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Free eBooks</li>
            <li>Development</li>
            <li>Tutorial</li>
            <li>How to-Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <p className="w-full text-gray-600  text-center">
        Design and developed by hexler tech
      </p>
    </div>
  );
};

export default Footer;
