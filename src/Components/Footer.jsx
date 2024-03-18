import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" p-[50px] flex justify-center items-center w-full">
      <div className="text-green-500 flex gap-5 items-center justify-center max-w-screen-lg w-full">
        <a
          href="https://www.linkedin.com/in/nilesh-kumar-477582294/"
          className="hover:text-yellow-500 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={25} />
        </a>
        <a
          href="https://x.com/NileshKuma8595?t=ieLk1RvhhObSkI5QtLgeIA&s=08"
          className="hover:text-yellow-500 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter size={25} />
        </a>
        <a
          href="https://github.com/NILESHSINGH234/"
          className="hover:text-yellow-500 hover:scale-110"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
