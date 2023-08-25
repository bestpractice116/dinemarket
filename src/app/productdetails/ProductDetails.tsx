"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { urlForImage } from "../../../sanity/lib/image";
import Wrapper from "../../../components/shared/Wrapper";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");
export default function ProductDetails({
  filteredData,
}: {
  filteredData: any;
}) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // console.log("filteredData", filteredData);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    setQuantity(quantity - 1);
  }
  const handleAddToCart = async () => {
    try {
      setIsLoading(true); // Set loading state to true before the API call

      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: "hsjhsjjoojw",
          product_id: filteredData._id,
          product_title: filteredData.title,
          product_price: filteredData.price * quantity,
          product_quantity: quantity,
          image_url: urlForImage(filteredData.image).url(),
        }),
      });

      // Assuming the API call was successful
      toast.success("Added to cart");
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after the API call
    }
  };

  return (
    <div className="mt-20">
      <Toaster />
      <Wrapper>
        <div className="flex md:flex-row flex-col justify-center gap-10 items-start">
          <div className="flex md:flex-row flex-col-reverse md:justify-start justify-center  gap-10 basis-[100%] md:basis-[50%]">
            <Image
              key={filteredData._id}
              src={urlForImage(filteredData.image).width(1440).url()}
              alt="product"
              width={1080}
              height={1080}
              className="max-w-[100px] max-h-[100px] object-fit object-top"
            ></Image>
            <Image
              src={urlForImage(filteredData.image).width(1440).url()}
              alt="product"
              width={1080}
              height={1080}
              className="md:max-w-[700px] object-fit object-top"
            ></Image>
          </div>
          <div className="flex flex-col mt-10 basis-[100%] md:basis-[50%] ">
            <h1 className="text-[24px] md:text-[30px]  font-[500] tracking-[3px]">
              {filteredData.title}
            </h1>
            <p className="font-[700] text-[20px] text-[#777777]">T-shirt</p>
            <h3 className="text-[16px] font-[700] mt-5 mb-2 tracking-wide">
              SELECT SIZE
            </h3>
            <div className="flex  md:gap-5 items-center mb-5">
              <p className="hover:shadow-2xl  cursor-pointer rounded-full h-14 w-14  flex items-center justify-center font-[700] text-[20px] text-[#777] ">
                XS
              </p>
              <p className="hover:shadow-2xl  cursor-pointer rounded-full h-14 w-14  flex items-center justify-center font-[700] text-[20px] text-[#777] ">
                S
              </p>
              <p className="hover:shadow-2xl  cursor-pointer rounded-full h-14 w-14  flex items-center justify-center font-[700] text-[20px] text-[#777] ">
                M
              </p>
              <p className="hover:shadow-2xl  cursor-pointer rounded-full h-14 w-14  flex items-center justify-center font-[700] text-[20px] text-[#777] ">
                L
              </p>
              <p className="hover:shadow-2xl  cursor-pointer rounded-full h-14 w-14  flex items-center justify-center font-[700] text-[20px] text-[#777] ">
                XL
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <h4 className="text-[16px] font-[700] mt-5 mb-2 tracking-wide">
                Quantity:
              </h4>
              <div>
                <button
                  onClick={handleDecrement}
                  disabled={quantity === 1}
                  className=" bg-white flex justify-center items-center h-10 w-10 rounded-full drop-shadow-2xl"
                >
                  <AiOutlineMinus size={22} />
                </button>
              </div>
              <div className="px-7 py-1 text-center">{quantity}</div>
              <div>
                <button
                  onClick={handleIncrement}
                  className="bg- bg-white flex justify-center items-center h-10 w-10 rounded-full drop-shadow-2xl"
                >
                  <AiOutlinePlus size={22} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-10">
              <button
                onClick={handleAddToCart} disabled={isLoading}
                className=" font-bold text-white bg-primary-color-text flex  py-3 px-6 border-solid border-2 border-gray-500"
              >
                <CgShoppingCart size={25} className="text-white mr-3 " />
                {isLoading ? "Adding..." : "Add to Cart"}
              </button>
              <h2 className="text-[24px] font-[700] tracking-[5px]">
                ${filteredData.price}
              </h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
