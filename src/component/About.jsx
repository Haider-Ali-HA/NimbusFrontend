import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
// import { motion } from 'framer-motion'

const About = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Add state for active index

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    const title = "Frequently Asked Questions";
    const faqs = [
        {
            question: "What is the purpose of this website?",
            answer:

                "The purpose of this website is to provide a platform for users to learn about the latest technologies and trends in the tech industry. We aim to provide valuable information to help users make informed decisions about their tech purchases."
        },
        {
            question: "How can I contribute to this website?",
            answer:
                "If you would like to contribute to this website, please contact us at"
        },
        {
            question: "How can I contact customer support?",
            answer:
                "If you have any questions or concerns, please contact our customer support team at"
        },
        {
            question: "How can I advertise on this website?",
            answer:
                "If you are interested in advertising on this website, please contact our sales team at"
        },
    ]
  return (
    <div>
       <section className="py-10  text-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2
           
            className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border  border-gray-200 shadow-lg cursor-pointer "
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <BiChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <BiChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>
              {/* Animated Answer Section */}
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
