/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="https://www.linkedin.com/in/razvan-intuneric/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/Raz.png"
            alt="logo"
            width={140}
            height={170}
            className="cursor-pointer hover:animate-slowspin"
          /> */}
          <Image 
  src="/Raz.png"
  alt="logo"
  width={150}
  height={150}
  className="cursor-pointer hover:animate-slowspin h-auto w-auto flex flex-row items-center pr-2" // Added pr-4 for padding to the right
/>

          
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            GenAI Portfolio
          </span>
        </a>

        {/* <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#genai" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div> */}

<div className="w-full md:w-[500px] h-full flex flex-row items-center md:justify-end md:mr-20">
  <div className="flex items-center md:justify-between w-full md:w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-2 md:px-[20px] py-[10px] rounded-full text-gray-200 space-x-2">
    <a href="#about-me" className="cursor-pointer">
      About
    </a>
    <a href="#skills" className="cursor-pointer">
      Skills
    </a>
    <a href="#genai" className="cursor-pointer">
      Projects
    </a>
  </div>
</div>


        {/* <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;