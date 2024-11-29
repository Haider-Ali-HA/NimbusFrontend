import React from "react";
import image1 from "../assets/headphones.png";
import image2 from "../assets/chart-bar.png";
import image3 from "../assets/board.png";
import image4 from "../assets/archive-content.png";
import image5 from "../assets/folder-favorite.png";
import image6 from "../assets/chart.png";

const Pricing = () => {
  return (
    <div id="Pricing" className="py-10 flex flex-col items-center  font-inter">
      {/* Pricing Numbers Section */}
      <div className="flex flex-col sm:flex-row gap-24 lg:gap-56 items-center justify-center w-full  ">
        <div className="text-black font-inter mt-10 ">
          <p className="text-start font-bold text-3xl pl-10 sm:pl-0  sm:text-4xl lg:text-5xl">
            <span className="text-primary mr-1 ">1</span>Rupee
          </p>
          <p className="text-end font-bold text-3xl sm:text-4xl pr-10  sm:pr-0 lg:text-5xl">
            Per <span className="text-primary">Receipt</span>
          </p>
          <p className="text-secondary text-center w-full sm:w-96 mt-4 px-6 sm:px-4">
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
        <h1 className="font-semibold text-3xl text-center px-5">
          Make every step user-centric
        </h1>
        <p className="text-secondary text-center mt-7 px-4">
          Enhance your user experience with our intuitive design and features.
        </p>
        <div className="ruled-grid mt-8 px-12 md:px-32">
          {/* Grid Items */}
          {[
            {
              image: image1,
              title: "Support",
              description:
                "We provide 24/7 support to ensure your success. Our team is always ready to assist you. Get help anytime, anywhere.",
            },
            {
              image: image2,
              title: "Sales",
              description:
                "Boost your sales with our innovative solutions. Increase your revenue with our tools. Drive more conversions effortlessly.",
            },
            {
              image: image3,
              title: "Onboarding",
              description:
                "Seamless onboarding process for new users. Get started quickly and easily. Enjoy a smooth transition.",
            },
            {
              image: image4,
              title: "Product",
              description:
                "High-quality products that meet your needs. Experience the best performance. Reliable and efficient solutions.",
            },
            {
              image: image5,
              title: "Quality",
              description:
                "We prioritize quality in everything we do. Delivering excellence consistently. Your satisfaction is our priority.",
            },
            {
              image: image6,
              title: "Result",
              description:
                "Achieve outstanding results with our tools. Maximize your productivity. Reach your goals faster.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card bg-white flex flex-col items-center gap-5 p-6"
            >
              <img
                className="mx-auto h-12 w-12"
                src={item.image}
                alt={item.title}
              />
              <h1 className="font-semibold text-lg">{item.title}</h1>

              <p className="text-secondary text-sm xl:w-4/6 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
