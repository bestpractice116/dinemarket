import React from "react";
import { getProductData } from "../../../../hooks/getProductData";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Wrapper from "../../../../components/shared/Wrapper";
import { CgShoppingCart } from "react-icons/cg";

const page = async ({ params }: { params: any }) => {
  console.log("Params", params);
  const data = await getProductData();
  const filterData = data.filter(
    (item: any) => item.slug.current == params.product
  );
  console.log(filterData);
  return (
    <div className="mt-20">
      <Wrapper>
        {filterData.map((item: any, index: any) => (
          <div
            key={item._id}
            className="flex md:flex-row flex-col justify-center gap-10 items-start"
          >
            <div className="flex md:flex-row flex-col-reverse md:justify-start justify-center  gap-10 basis-[100%] md:basis-[50%]">
              <Image
                src={urlForImage(item.image).width(1440).url()}
                alt="product"
                width={1080}
                height={1080}
                className="max-w-[100px] max-h-[100px] object-fit object-top"
              ></Image>
              <Image
                src={urlForImage(item.image).width(1440).url()}
                alt="product"
                width={1080}
                height={1080}
                className="md:max-w-[700px] object-fit object-top"
              ></Image>
            </div>
            <div className="flex flex-col mt-10 basis-[100%] md:basis-[50%] ">
              <h1 className="text-[24px] md:text-[30px]  font-[500] tracking-[3px]">
                {item.title}
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
                {/* <h4 className="text-[16px] font-[700] mt-5 mb-2 tracking-wide">
                  Quantity:
                </h4> */}
              </div>
              <div className="flex items-center gap-5 mt-10">
                <button className=" font-bold text-white bg-primary-color-text flex  py-3 px-6 border-solid border-2 border-gray-500">
                  <CgShoppingCart size={25} className="text-white mr-3 " />
                  Add to Cart
                </button>
                <h2 className="text-[24px] font-[700] tracking-[5px]">
                  ${item.price}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default page;
