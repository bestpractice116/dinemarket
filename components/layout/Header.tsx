"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import logo from "../../public/assets/Logo.webp";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const router = useRouter();
  const [number, setNumber] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOp, setIsOp] = useState(false);

  const [nav, setNav] = useState(false);
  const [hoverIsOpen, hoverSetIsOpen] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    hoverSetIsOpen(!hoverIsOpen);
  };
  const closeMenu = () => {
    setNav(false);
  };
  function increaseNumber() {
    setNumber(number + 1);
  }
  return (
    <div className="mt-6">
      <Wrapper>
        <div className="flex justify-between items-center">
          {/* left  */}
          <div className="flex">
            {/* logo  */}
            <Image
              className="cursor-pointer"
              onClick={() => router.push("/")}
              src={logo}
              alt="logo"
              width={180}
              height={180}
            ></Image>
          </div>
          {/* right */}
          <div className="hidden md:flex items-center gap-10">
            {/* nav lis */}
            <div>
              <ul className="flex space-x-12 text-base font-normal">
                <li
                  onClick={() => router.push("/female")}
                  className=" cursor-pointer"
                >
                  Female
                </li>
                <li
                  onClick={() => router.push("/male")}
                  className=" cursor-pointer"
                >
                  Male
                </li>
                <li
                  onClick={() => router.push("/kids")}
                  className=" cursor-pointer"
                >
                  Kids
                </li>
                <li
                  onClick={() => router.push("/products")}
                  className=" cursor-pointer"
                >
                  All Products
                </li>
              </ul>
            </div>
            {/* search bar */}
            <div className="flex  items-center space-x-2 border pl-2  rounded-md">
              <CiSearch size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="What are you looking for"
                className="w-[350px] pr-36 py-3 border-none focus:outline-none"
              />
            </div>
            {/* cart  */}
            <button
              onClick={()=> router.push('/cart')}
              className="hover:scale-110 duration-200 ease-in"
            >
              <div className="bg-[#F1F1F1] p-3 rounded-full relative">
                <p className="bg-red-600 w-[15px] font-bold text-[10px] rounded-full absolute text-white text-center mt-[-14px] ml-[12px]">
                  {number}
                </p>
                <CgShoppingCart size={22} />
              </div>
            </button>
          </div>

          {/* mobile menu  */}
          <div
              onClick={handleNavbar}
              className=" sm:block md:hidden flex items-center   cursor-pointer z-50"
            >
              {nav ? (
                <RxCross1 size={35} className="text-primary-purple-text " />
              ) : (
                <CgMenuRightAlt size={35} className="text-primary-purple-text " />
              )}
            </div>
            <div
              className={
                nav
                  ? "md:hidden fixed top-0 right-0 shadow-md overflow-scroll bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-0"
                  : "md:hidden fixed top-0 right-0 shadow-md overflow-scroll bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen bg-white text-black text-right ease-linear duration-100 z-20 transform translate-x-full"
              }
            >
            <div className="absolute mt-[-3.5rem]">
              <h3 className="font-black text-lg  text-primary-green-text">
                Menu
              </h3>
            </div>
            <div className="flex flex-col justify-between ">
              <div className="flex flex-col basis-[50%]">
                <ul className="flex flex-col justify-start items-start gap-5 text-2xl font-black">
                  <li
                    onClick={() => router.push("/female")}
                    className=" cursor-pointer"
                  >
                    Female
                  </li>
                  <li
                    onClick={() => router.push("/male")}
                    className=" cursor-pointer"
                  >
                    Male
                  </li>
                  <li
                    onClick={() => router.push("/kids")}
                    className=" cursor-pointer"
                  >
                    Kids
                  </li>
                  <li
                    onClick={() => router.push("/products")}
                    className=" cursor-pointer"
                  >
                    All Products
                  </li>
                </ul>
                <div className="flex mt-10 items-center space-x-2 border pl-2  rounded-md">
                  <CiSearch size={18} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="What are you looking for"
                    className="w-[220px]  py-3 border-none"
                  />
                </div>
                {/* cart  */}
                <button
                  onClick={()=> router.push('/cart')}
                  className="hover:scale-110 duration-200 ease-in justify-center flex items-center"
                >
                  <div className="bg-[#F1F1F1] p-3 w-[48px]  rounded-full relative mt-5 ">
                    <p className="bg-red-600 w-[15px] font-bold text-[10px] rounded-full absolute text-white text-center mt-[-14px] ml-[12px]">
                      {number}
                    </p>
                    <CgShoppingCart size={22} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
