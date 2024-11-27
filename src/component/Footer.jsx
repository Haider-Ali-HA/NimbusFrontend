import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-[#FAFAFB] flex flex-col  gap-10 p-28 font-inter">
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold text-4xl w-[31rem]">
          Learn how to grow {String.fromCodePoint(0x1f4aa)} audience fast in
          Twitter
        </h1>
        <button className="h-11 px-4 bg-black hover:bg-opacity-80  text-white rounded-full">
          Download Free Chapter
        </button>
      </div>
      <hr className="border-gray-300" /> {/* Changed class to border-red-500 */}
      <div className="grid grid-cols-5 ">
        <div className="col-span-2 gap-2 grid">
          {" "}
          {/* Added col-span-2 */}
          <h1 className="text-lg font-semibold">About Rareblocks</h1>
          <p className="w-1/2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            culpa quae temporibus magni quisquam, minus sed doloribus odit
            dolorum ad distinctio facere rem, eos incidunt itaque nostrum amet,
            at natus.
          </p>
          <div className="flex gap-5 my-6">
            <a href="">
              <FaTwitter className="text-xl" />
            </a>
            <a href="">
              <FaFacebook className="text-xl" />
            </a>

            <a href="">
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
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
