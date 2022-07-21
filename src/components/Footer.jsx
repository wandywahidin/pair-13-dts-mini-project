import React from "react";

const Footer = () => {
  return (
    <div className="w-[80%] mx-auto text-justify flex justify-center md:gap-20 text-gray-400 my-20 text-xs md:text-sm">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col cursor-pointer">
          <p>Auidio and Subtitle</p>
          <p>Media Center</p>
          <p>Security</p>
          <p>Contact Us</p>
          <p className="p-2 border border-gray-400 text-base my-2 w-[70%] text-center">
            Service Code
          </p>
          <p className="text-xs">
            &copy; 2022 Wandy & Reza, All Right Reserved
          </p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <p>Auidio Description</p>
          <p>Investor Relations</p>
          <p>Legal Provisions</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col cursor-pointer">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <p>Gift Card</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
