import React from "react";
import image1 from "../assets/headphones.png";
import image2 from "../assets/chart-bar.png";
import image3 from "../assets/board.png";
import image4 from "../assets/archive-content.png";
import image5 from "../assets/folder-favorite.png";
import image6 from "../assets/chart.png";

const Pricing = () => {
  return (
    <div id="Pricing" className="py-10 flex flex-col items-center font-inter">
      {/* Pricing Numbers Section */}
      <div className="flex flex-col sm:flex-row gap-24 lg:gap-56 items-center justify-center ">
        <div className="text-black font-inter mt-10">
          <p className="text-start font-bold text-3xl pl-4 sm:pl-0 sm:text-4xl lg:text-5xl">
            <span className="text-primary mr-1 ">1</span>Rupee
          </p>
          <p className="text-end font-bold text-3xl sm:text-4xl pr-4 sm:pr-0 lg:text-5xl">
            Per <span className="text-primary">Receipt</span>
          </p>
          <p className="text-secondary text-center w-80 mt-4 px-4">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex items-center gap-3  h-full font-inter -mt-10">
          <p className=" text-xl font-semibold -mt-20">PKR</p>
          <p className="text-primary h-full text-[8rem] sm:text-[11rem] lg:text-[15rem] font-semibold">
            1
          </p>
          <p className=" text-xl font-semibold mt-28 lg:mt-36">Only</p>
        </div>
      </div>

      {/* User-Centric Steps Section */}
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="font-semibold text-3xl text-center px-5">Make every step user-centric</h1>
        <p className="text-secondary text-center mt-7 px-4">
          Lorem ipsum dolor sit, amet consectetur
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-8 px-12 md:px-32 w-full">
          {/* Individual Grid Items with unique borders */}
          {[
            { image: image1, title: "Support" },
            { image: image2, title: "Sales" },
            { image: image3, title: "Onboarding" },
            { image: image4, title: "Product" },
            { image: image5, title: "Quality" },
            { image: image6, title: "Result" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-5 p-6 bg-white ${item.borderClass}`}
            >
              <img
                className="mx-auto h-12 w-12"
                src={item.image}
                alt={item.title}
              />
              <h1 className="font-semibold text-lg text-center">
                {item.title}
              </h1>
              <p className="text-center text-secondary text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                enim nec, proin faucibus nibh et sagittis a.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
