import { Meteors } from "@/components/ui/meteors";
import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      <div className="relative  ">
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl ">
          <div className="flex flex-col justify-center items-center space-y-5 py-12 mt-30">
            <h1 className="sm:text-4xl lg:text-6xl text-white font-bold ">
              Contact Us
            </h1>
            <p className="text-center w-[35rem] text-gray-500">
              We are here for help with any questions about our courses ,
              programs , or events.Reach out and let us know how we can assist
              you in your musical journey
            </p>
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-6 bg-gray-600 w-[40rem] rounded-md font-sans  py-3 text-lg  focus:outline-none "
            />
            <textarea
              name="message"
              placeholder="Your Message or Questions"
              className="px-6 bg-gray-600 w-[40rem] rounded-md font-sans  py-3 text-lg  focus:outline-none "
              rows={8}
            ></textarea>
            <Meteors number={20} />
            <button className="text-lg lg:text-xl bg-teal-400 text-gray-950 font-bold px-4 py-2 w-[40rem] rounded-md transition-all duration-300  hover:bg-teal-300 ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
