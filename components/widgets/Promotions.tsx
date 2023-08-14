import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import image1 from "../../public/assets/img1.webp";
import image2 from "../../public/assets/img2.webp";
import image3 from "../../public/assets/img3.webp";

const Promotions = () => {
  return (
    <div>
      <Wrapper>
        <div className="text-center mt-10 md:mt-28">
          <h1 className="text-xs font-semibold pb-3 text-[#188FF8] tracking-[.25em] ">
            PROMOTIONS
          </h1>
          <h3 className="text-2xl md:text-4xl font-bold text-primary-color-text">
            Our Promotions Event
          </h3>
        </div>
        <div className="flex md:flex-row flex-col mt-8 gap-x-8">
          <div className="flex flex-col gap-y-4 basis-[100%] md:basis-[50%]">
            <div className="flex items-center bg-[#D6D6D8]  md:pl-0 py-5 md:py-0 md:px-6 h-48 md:w-[650px]">
              <p className="md:pl-6 pl-4 py-3 md:py-0 font-bold text-xl md:text-3xl text-[#212121]">
                GET UP TO <span className=" text-2xl md:text-4xl">60%</span>
                <br />
                <span className="text-lg font-normal">
                  For the summer season
                </span>
              </p>
              <Image
                src={image1}
                alt="image"
                width={1080}
                height={1080}
                className="w-[300px] h-[180px] mt-3 md:mt-0  md:w-[250px] md:max-w-[250px] md:ml-20"
              ></Image>
            </div>
            <div className="bg-[#212121] px-8  h-48  justify-center flex flex-col md:w-[650px]">
              <div className="text-center text-white font-bold text-xl md:text-4xl">
                <p>
                  GET 30% Off
                  <br />
                  <span className="text-sm font-normal">USE PROMO CODE</span>
                </p>

                <p className="cursor-pointer px-3 md:w-[300px] m-auto py-1  text-lg bg-[#474747] rounded-lg md:tracking-[.25em]">
                  DINEWEEKENSALE
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 md:mt-0 flex md:flex-row flex-col gap-y-4 md:basis-[50%] md:gap-x-4">
            <div className="bg-[#EFE1C7] h-[400px]">
              <div className="pt-8 pb-5 px-4">
                <p className="text-sm">Flex Sweatshirt</p>
                <p className="font-semibold text-lg">
                  <span className=" text-base line-through font-normal pr-2">
                    $100.00
                  </span>
                  $75.00
                </p>
              </div>
              <Image
                src={image2}
                alt="image"
                width={1440}
                height={1080}
                className="max-w-[274px] max-h-[300px]"
              ></Image>
            </div>
            <div className="bg-[#D7D7D9] h-[400px]">
              <div className="pt-8 pb-5 px-4">
                <p className="text-sm">Flex Push Button Bomber</p>
                <p className="font-semibold text-lg">
                  <span className=" text-base line-through font-normal pr-2">
                    $225.00
                  </span>
                  $190.00
                </p>
              </div>
              <Image
                src={image3}
                alt="image"
                width={1440}
                height={1080}
                className="max-w-[274px] max-h-[300px]"
              ></Image>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Promotions;
