import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import logo from "../../public/assets/Logo.webp";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import DetailedFooter from "./DetailedFooter";

const Footer = () => {
  return (
    <div className="md:mt-36  mt-[15rem]">
      <Wrapper>
        <div className="flex md:flex-row flex-col gap-10 md:gap-0 justify-between">
          <div className="space-y-12 md:w-[400px] md:max-w-[400px]">
            <Image src={logo} alt="" width={200} height={100} />
            <p className="text-[#666666]">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex gap-x-4">
              <button
                className="
                        bg-neutral-200
                        rounded-md
                       px-3 py-3
                        "
              >
                <BsTwitter size={20} className="text-black" />
              </button>
              <button
                className="
                        bg-neutral-200
                        rounded-md
                       px-3 py-3
                        "
              >
                <FaFacebookF size={20} className="text-black" />
              </button>
              <button
                className="
                        bg-neutral-200
                        rounded-md
                       px-3 py-3
                        "
              >
                <FaLinkedinIn size={20} className="text-black" />
              </button>
            </div>
          </div>
          <div className="text-[#666666] ">
            <div className="">
              <p className="text-xl font-bold pb-5">Company</p>
              <ul className="flex flex-col gap-y-4">
                <Link href={"/"}>
                  <li>About</li>
                </Link>
                <Link href={"/"}>
                  <li>Terms of Use</li>
                </Link>
                <Link href={"/"}>
                  <li>Privacy Policy</li>
                </Link>
                <Link href={"/"}>
                  <li>How its Works</li>
                </Link>
                <Link href={"/"}>
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="text-[#666666] md:pl-20">
            <p className="text-xl font-bold pb-5">Support</p>
            <ul className=" flex flex-col gap-y-4 ">
              <Link href={"/"}>
                <li>Support Carrer</li>
              </Link>
              <Link href={"/"}>
                <li>24h Service</li>
              </Link>
              <Link href={"/"}>
                <li>Quick Chat</li>
              </Link>
            </ul>
          </div>
          <div className="text-[#666666]">
            <p className="text-xl font-bold pb-5">Contact</p>
            <ul className="flex flex-col gap-y-4 ">
              <Link href={"/"}>
                <li>Whatsapp</li>
              </Link>
              <Link href={"/"}>
                <li>Support 24h</li>
              </Link>
            </ul>
          </div>
        </div>
      </Wrapper>
      <DetailedFooter/>
    </div>
  );
};

export default Footer;
