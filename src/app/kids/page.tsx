"use client";
import { useEffect, useState } from "react";
import Wrapper from "../../../components/shared/Wrapper";

import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { getKidsData, getKidsDataProps } from "../../../hooks/getKidsData";


const KidsData = () => {
  const [female, setFemale] = useState<getKidsDataProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getKidsData();
        setFemale(product);
        console.log(product);
      } catch (error) {
        console.log("Error fetching female product data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-20">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-center items-center">
          {female.map((item) => (
            <div key={item._id} className=" cursor-pointer">
              <Image
                src={urlForImage(item.image).width(1440).url()}
                alt="product"
                width={400}
                height={400}
                className="max-h-[400px] object-fit object-top"
              ></Image>
              <h3 className="py-4 font-semibold text-lg">{item.title}</h3>
              <p className="font-semibold text-lg">${item.price}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default KidsData;
