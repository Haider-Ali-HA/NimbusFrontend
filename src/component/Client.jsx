import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";
import client8 from "../assets/client8.png";
import clientBg from "../assets/client-bg.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import videoThumbnail from "../assets/video-thumbnail.png";
import { Link } from "react-scroll";
import profile1 from "../assets/profile1.png"; // Replace with the actual paths to your profile images
import profile2 from "../assets/profile1.png";
import profile3 from "../assets/profile1.png";

const testimonials = [
  {
    image: profile1,
    name: "Darlene Robertson",
    title: "Product Manager at Jomanar",
    quote:
      "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
  },
  {
    image: profile2,
    name: "Bessie Cooper",
    title: "Freelance UX Designer",
    quote:
      "I didn’t know designing in Webflow could be this individualized. I'd never considered it before, but Landingfolio changed my mind.",
  },
  {
    image: profile3,
    name: "Arlene McCoy",
    title: "Product Designer at Martina.co",
    quote:
      "We love Landingfolio! Our designers were using it for their projects, so clients already knew what Landingfolio was and how to use it.",
  },
];
const Client = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div
          className="bg-cover bg-center flex flex-col items-center justify-center py-24 text-white text-center"
          style={{ backgroundImage: `url(${clientBg})` }}
        >
          <h2 className="mb-8 text-xl text-secondary">Our Clients</h2>
          <div className="grid grid-cols-3 items-center justify-center gap-y-5 gap-x-10">
            <img src={client1} alt="Waverio" className="w-52" />
            <img src={client2} alt="Loggipsum" className="w-52" />
            <img src={client3} alt="Alterbone" className="w-52" />
            <img src={client4} alt="Tinygone" className="ml-10 w-52" />
            <img src={client5} alt="Preso" className="ml-10 w-52" />
            <img src={client6} alt="Ridoria" className="ml-10 w-52" />
            <img src={client7} alt="Carbonia" className="ml-20 w-52" />
            <img src={client8} alt="Incanto" className="ml-20 w-52" />
          </div>
        </div>
        <div className="relative w-5/6 mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src={videoThumbnail}
            alt="Groover Video Thumbnail"
            className="w-full h-auto object-cover"
          />
          <Link to="https://www.youtube.com/watch?v=FE8NvDXbStk">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white hover:bg-red-700 transition-all duration-300 bg-transparent backdrop-blur-md rounded-xl p-2 shadow-md"
              aria-label="Play Video"
            >
              <IoPlayCircleOutline className="text-white text-4xl " />
            </button>
          </Link>
          <div className="absolute bottom-3 text-lg left-0 right-0 bg-opacity-60 text-white py-3 text-center">
            See how we helped Groover to grow 11x faster
          </div>
        </div>
      </div>
      {/*  testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="text-center  p-6 rounded-lg shadow-sm"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
                <p className="mt-4 text-black font-semibold">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
