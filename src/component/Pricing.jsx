import React from "react";
import image1 from "../assets/headphones.png";
import image2 from "../assets/chart-bar.png";
import image3 from "../assets/board.png";
import image4 from "../assets/archive-content.png";
import image5 from "../assets/folder-favorite.png";
import image6 from "../assets/chart.png";

const Pricing = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      {/* Pricing Numbers Section */}
      <div className="flex gap-56 items-center justify-center ">
        <div className="text-black">
          <p className="text-start font-bold text-5xl">
            <span className="text-primary mr-1">1</span>Rupee
          </p>
          <p className="text-end font-bold text-5xl">
            Per <span className="text-primary">Receipt</span>
          </p>
          <p className="text-secondary text-center w-80 mt-4">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="flex items-center gap-3 h-full -mt-20">
          <p className=" text-xl font-semibold -mt-20">PKR</p>
          <p className="text-primary h-full text-[18rem] font-semibold">1</p>
          <p className=" text-xl font-semibold mt-56">Only</p>
        </div>
      </div>

      {/* User-Centric Steps Section */}
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="font-semibold text-3xl">Make every step user-centric</h1>
        <p className="text-secondary text-center mt-7">
          Lorem ipsum dolor sit, amet consectetur
        </p>
        <div className="grid grid-cols-3  mt-8 px-32 w-full">
          {/* Individual Grid Items with unique borders */}
          {[{ image: image1, title: "Support", borderClass: "border-b" },
            { image: image2, title: "Sales", borderClass: "border-r border-l border-b" },
            { image: image3, title: "Onboarding", borderClass: "border-b" },
            { image: image4, title: "Product", borderClass: "border-r" },
            { image: image5, title: "Quality", borderClass: "" },
            { image: image6, title: "Result", borderClass: "border-l" },
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
              <h1 className="font-semibold text-lg text-center">{item.title}</h1>
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
