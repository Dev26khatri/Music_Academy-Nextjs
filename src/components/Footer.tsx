import React from "react";

const Footer = () => {
  return (
    <div className="p-12  bg-black ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="felx flex-col items-center space-y-3">
          <h4 className="font-bold text-lg capitalize">About us</h4>
          <p className="text-gray-400 text-md capitalize">
            We are a passionate music academy dedicated to nurturing talent
            through expert guidance and creative learning. From classical roots
            to modern melodies, we help every student find their unique voice.
            🎶
          </p>
        </div>
        <div className="felx flex-col items-center space-y-3">
          <h4 className="font-bold text-lg capitalize">Quick Links</h4>
          <div className="text-gray-400 text-md capitalize">
            <p>Home</p>
            <p>About</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="felx flex-col items-center space-y-3">
          <h4 className="font-bold text-lg capitalize">Follow Us</h4>
          <div className="text-gray-400 text-md capitalize">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instgram</p>
          </div>
        </div>
        <div className="felx flex-col items-center space-y-3">
          <h4 className="font-bold text-lg capitalize">Contact us</h4>
          <div className=" text-gray-400 text-md capitalize ">
            <p>New Delhi,india</p>
            <p>Delhi 10001</p>
            <p>Email:info@musicacdamy.com </p>
            <p>Phone : (123) XXXXX</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-3 mt-5">
        &copy;2025 Music School. All right reserved
      </div>
    </div>
  );
};

export default Footer;
