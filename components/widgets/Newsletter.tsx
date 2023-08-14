import React from "react";
import Wrapper from "../shared/Wrapper";

const Newsletter = () => {
  return (
    <div className="justify-center flex  mt-10 md:mt-20">
      <Wrapper>
        <div>
          <h1 className="text-[50px] md:text-[130px] font-black text-[#F2F3F7] relative">Newsletter</h1>
        </div>
        <div className="absolute mt-[-8rem] text-center md:m-[-12rem]  mr-[2rem] md:ml-[8rem] space-y-8">
          <p className="text-[#212121] font-bold text-3xl">Subscribe Our Newsletter</p>
          <p className="text-[#616161] pb-4">Get the latest information and promo offers directly</p>
          <div className="flex justify-center  gap-x-1 md:gap-x-4 ">
            <input placeholder="Input email address" type="text" className="border-[#212121] border md:w-[350px] pl-4 md:pl-8 text-sm font-light"  />
            <button className="font-medium text-xs md:text-base text-white bg-primary-color-text flex py-3 px-2  md:py-[8px] md:px-6 border-solid border-2 border-gray-500">Get Started</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Newsletter;
