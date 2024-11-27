import React from "react";
import Avatar from "../assets/avatar-group.png";

const Contact = () => {
  return (
    <>
      {/* get in touch  */}
      <div className="bg-[#F9FAFB] rounded-lg flex flex-col gap-4 items-center justify-center py-11 mx-20 mb-20">
        <img className="w-40" src={Avatar} alt="avatar" />
        <h1 className="font-semibold text-xl">Still have questions?</h1>
        <p className="text-secondary">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="bg-primary shadow-sm hover:bg-opacity-80  text-white px-5 py-2 rounded">
          Get in touch
        </button>
      </div>
    </>
  );
};

export default Contact;
