"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import header from "../../public/assets/header.webp";
import feature1 from "../../public/assets/Featured1.webp";
import feature2 from "../../public/assets/Featured2.webp";
import feature3 from "../../public/assets/Featured3.webp";
import feature4 from "../../public/assets/Featured4.webp";
import { CgShoppingCart } from "react-icons/cg";

import { useEffect, useState } from "react";
import { IBanner, getHeroData } from "../../hooks/getHeroData";

const Hero = () => {
  const [Banner, setBanner] = useState<IBanner[]>([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const hero = await getHeroData();
        setBanner(hero);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <div className="mt-5 md:mt-10 overflow-hidden">
      <Wrapper>
        <div className="flex md:flex-row flex-col">
          {/* left  */}
          <div className="basis-[100%] md:basis-[50%] items-center pt-[5rem]">
            <div>
              <span className="bg-[#E1EDFF] text-[#0000FF] font-bold py-3 px-6 rounded-md">
                Sale 70%
              </span>
              <h1 className="font-bold text-primary-color-text text-[40px] md:text-[56px] leading-[55px] py-7 md:py-11">
                An Industrial Take on Streetwear
              </h1>
              <p className="text-[#666666] md:pr-[10rem]">
                Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits.
              </p>
              <button className="mt-11 font-bold text-white bg-primary-color-text flex  py-[18px] px-6 border-solid border-2 border-gray-500">
                <CgShoppingCart size={25} className="text-white mr-3 " />
                Start Shopping
              </button>
            </div>

            <div className="flex space-x-6 md:space-x-12 mt-[2rem] md:mt-[8rem]">
              <Image src={feature1} alt="logo" height={100} width={110}></Image>
              <Image src={feature2} alt="logo" height={110} width={110}></Image>
              <Image src={feature3} alt="logo" height={110} width={110}></Image>
              <Image src={feature4} alt="logo" height={110} width={110}></Image>
            </div>
          </div>
          {/* right */}
          <div className="flex justify-center md:block md:justify-normal md:items-start mt-[3rem] items-center basis-[100%] md:basis-[50%]">
            <div className="bg-[#FFECE3]   rounded-full w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative  md:mt-[2rem] md:ml-[7rem]"></div>
            <Image
              src={header}
              alt=""
              width={670}
              height={670}
              className="md:w-[600px] md:h-[600px] w-[280px] h-[280px] absolute mt-[1rem] md:mt-[-39rem] md:ml-[10rem] "
            ></Image>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Hero;
