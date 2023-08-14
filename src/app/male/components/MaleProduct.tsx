import Image from "next/image";
import React, { FC } from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import { getMaleDataProps } from "../../../../hooks/getMaleData";

const MaleProduct: FC<{ item: getMaleDataProps }> = ({ item }) => {
  const handleAddtoCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      }),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div>
      <Image
        src={urlForImage(item.image).width(1440).url()}
        alt="product"
        width={400}
        height={400}
        className="max-h-[400px] object-fit object-top"
      ></Image>
      <h3 className="py-4 font-semibold text-lg">{item.title}</h3>
      <p className="font-semibold text-lg">${item.price}</p>
      <button
        onClick={() => handleAddtoCart()}
        className="mt-8 font-medium text-white bg-primary-color-text flex  py-[8px] px-6 border-solid border-2 border-gray-500"
      >
        Add to cart
      </button>
    </div>
  );
};

export default MaleProduct;
