import Image from "next/image";
import React, { useState, useEffect } from "react";
import Wrapper from "../../../components/shared/Wrapper";
import { cookies } from "next/headers";

const page = async () => {
    const setCookies = cookies();
    const uid = setCookies.get('user_id')?.value;
  const response = await fetch(
    `https://ecommerceproject-red.vercel.app/cart?user_id=${uid}`
  );
  const data = await response.json();
  //   console.log(data);

  return (
    <Wrapper>
      <div className="flex justify-between mt-32">
        <div className="flex flex-col md:justify-center items-center md:items-start justify-center gap-5 basis-[100%] md:basis-[70%]  w-full">
          <h1 className="text-3xl font-black pb-10">Shopping Cart</h1>
          {data.map((item: any, index: any) => (
            <div key={index}>
              <div className="flex justify-start border-b py-5 items-start gap-5">
                <Image
                  src={item.image_url}
                  alt="product"
                  width={600}
                  height={600}
                  className="w-[100px] md:w-[200px] object-cover object-top rounded-lg"
                ></Image>
                <div className="flex flex-col gap-3">
                  <p className="text-[21px] font-[300]">{item.product_title}</p>
                  <div className="flex justify-between items-start ">
                    <div className="flex-col gap-3 flex">
                      <p className="text-[16px] font-[600]">
                        Delievery Estimation
                      </p>
                      <p className="text-[#ffc700] text-[16px] font-[600]">
                        5 Working Days
                      </p>
                      <p className="text-[16px] font-[700]">
                        ${item.product_price}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <p>Qantity:</p>
                    <p>{item.product_quantity}</p>
                  </div>
                <button className=" max-w-[150px] font-bold text-white bg-primary-color-text  py-2 px-6 border-solid border-2 border-gray-500 text-center">
                Buy Now
              </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </Wrapper>
  );
};

export default page;
