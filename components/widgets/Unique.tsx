import React from "react";
import Wrapper from "../shared/Wrapper";
import { uniqueData, UniqueDataProps } from "../../data/uniqueData";
import Image from "next/image";
import uniqueImg from "../../public/assets/uniqueimg.webp";
const Unique = () => {
  return (
    <div className="bg-[#FBFCFF]  md:mt-60 py-8">
      <Wrapper>
        <div className="flex md:flex-row flex-col py-10 md:py-20 ">
          <div className="basis-[100%] md:basis-[50%]">
            <h1 className="text-6xl md:text-[110px] relative font-black text-[#ECEDEF] leading-[7rem]">
              Different from others
            </h1>
            <div className=" grid grid-cols-2 mt-[-320px] absolute max-w-[300px] md:max-w-[600px] gap-x-5 md:gap-x-28">
              {uniqueData.map((data: UniqueDataProps) => (
                <div key={data.id}>
                  <div className="max-w-[200px] ">
                    <p className="font-bold text-lg pb-4 text-[#212121]">
                      {" "}
                      {data.heading}
                    </p>
                    <p className="pb-8 text-[#212121]">{data.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basis-[100%] md:basis-[50%]  mt-[8rem] md:mt-0">
            <h2 className=" md:pl-[5rem] md:pr-[4rem] font-bold text-[32px] md:text-[44px] text-[#212121] md:absolute md:mt-[-14.3rem]">
              Unique and Authentic Vintage Designer Jewellery
            </h2>
            <div className="mt-5 md:mt-0 flex md:flex-row flex-col items-start md:items-center gap-x-6">
              <Image
                src={uniqueImg}
                alt="image"
                width={300}
                height={300}
              ></Image>
              <div>
                <p className="text-[#212121] md:w-[300px] text-justify pt-5 md:pt-0">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <button className="mt-5 md:mt-8 font-medium text-white bg-primary-color-text flex  py-[8px] px-6 border-solid border-2 border-gray-500">
                  See All Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Unique;
