"use client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Wrapper from "../shared/Wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useEffect, useState } from "react";
import { IProduct, getProductData } from "../../hooks/getProductData";
import Link from "next/link";

const Products = () => {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductData();
        setData(products);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center mt-20">
      <Wrapper>
        <h1 className="text-xs font-semibold pb-3 text-[#188FF8] tracking-[.25em]">
          PRODUCTS
        </h1>
        <h3 className="text-2xl md:text-4xl font-bold text-primary-color-text">
          Check What We Have
        </h3>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            // For screens >= 640px (mobile)
            640: {
              slidesPerView: 1, // Show 1 slide per view for screens >= 640px
            },
            // For screens >= 1024px (laptop)
            1024: {
              slidesPerView: 3, // Show 3 slides per view for screens >= 1024px
            },
          }}
        >
          {data.map((items) => (
            <SwiperSlide key={items._id}>
              <Link href={`/product/${items.slug.current}`} className="hover:-translate-y-3 justify-around duration-300 cursor-pointer mt-16 ">
                <Image
                  src={urlForImage(items.image).width(1440).url()}
                  alt="product"
                  width={400}
                  height={400}
                  className="max-h-[400px] object-fit object-top"
                />
                <div className="text-left text-lg font-semibold py-3">
                  <h1>{items.title}</h1>
                  <p>${items.price}</p>
                  {/* <p>{items.category.name}</p> */}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </div>
  );
};

export default Products;
