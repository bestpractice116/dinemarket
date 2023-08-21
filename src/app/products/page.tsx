"use client";
import { useEffect, useState } from "react";
import Wrapper from "../../../components/shared/Wrapper";

import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { IProduct, getProductData } from "../../../hooks/getProductData";
import Loader from "../male/components/Loader";
import Link from "next/link";
import FetchData from "../../../sanity/FetchData";

export default async function page(){
  const data = await FetchData();
  console.log(data)
  return (
    <div className="mt-20">
      <Wrapper>
     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-center items-center">
          {data.map((item:any, index:any) => {
            console.log('Item:', item)
            return(
              <Link href="/product/[slug]" as={`/product/${item.slug.current}`} key={index} className="cursor-pointer">
              <Image
                src={urlForImage(item.image).width(1440).url()}
                alt="product"
                width={400}
                height={400}
                className="max-h-[400px] object-fit object-top"
              ></Image>
              <h3 className="py-4 font-semibold text-lg">{item.title}</h3>
              <p className="font-semibold text-lg">${item.price}</p>
            </Link>
            )
          })}
        </div>
 
      </Wrapper>
    </div>
  );
};


