import React, { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Map from "../assets/map.png";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Add state for active index

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer:
        "The purpose of this website is to provide a platform for users to learn about the latest technologies and trends in the tech industry. We aim to provide valuable information to help users make informed decisions about their tech purchases.",
    },
    {
      question: "How can I contribute to this website?",
      answer:
        "If you would like to contribute to this website, please contact us at",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "If you have any questions or concerns, please contact our customer support team at",
    },
    {
      question: "How can I advertise on this website?",
      answer:
        "If you are interested in advertising on this website, please contact our sales team at",
    },
  ];
  return (
    <div className="font-inter">
      {/* About Section */}
      <div>
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <h6 className="text-primary font-bold">About us</h6>
          <h1 className="font-semibold text-center text-3xl px-4 md:text-4xl">
            Our Software is Used Worldwide
          </h1>
          <p className="text-secondary text-center w-5/6 md:w-1/2">
            It's running in more than 15 countries worldwide
          </p>
        </div>
        <div className="flex  items-center justify-center ">
          <img src={Map} alt="" />
        </div>
        <div className="flex gap-20 flex-wrap flex-col md:flex-row xl:gap-40 items-center mt-10 mb-20 justify-center">
          <div className="text-center">
            <h1 className="text-xl lg:text-2xl font-semibold">Support</h1>
            <p className="text-secondary my-2">
              Our friendly team is here to help.
            </p>
            <p className="text-primary font-semibold">
              {" "}
              support@untitledui.com
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-xl lg:text-2xl font-semibold">Sales</h1>
            <p className="text-secondary my-2">
              Questions or queries? Get in touch!
            </p>
            <p className="text-primary font-semibold"> sales@untitledui.com</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl lg:text-2xl font-semibold">Phone</h1>
            <p className="text-secondary my-2">Mon-Fri from 8am to 5pm</p>
            <p className="text-primary font-semibold"> +1 (555) 000-0000</p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <section className="py-10  text-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className=" font-bold leading-tight  text-black text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary mt-5 md:mt-11">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="flex flex-col  items-center justify-center gap-4 mt-8 md:mt-16 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="transition-all items-center  duration-200 bg-white border-b border-gray-200  cursor-pointer w-full md:w-3/4"
              >
                <button
                  type="button"
                  className="flex justify-between  w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="md:text-lg  font-semibold text-black">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <FiMinusCircle className="w-6 h-6  text-primary" />
                  ) : (
                    <FiPlusCircle className="w-6 h-6  text-primary" />
                  )}
                </button>
                {/* Animated Answer Section */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
