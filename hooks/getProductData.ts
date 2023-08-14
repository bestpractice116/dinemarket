import { client } from "@/app/lib/sanityClient";
import { Image } from "sanity";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type == 'product']{
    _id,
    title,
    image,
    price,
    category -> {
      name
    }
  }`);
  return res;
};
export interface IProduct {
    _id: string;
    title: string;
    image: Image;
    price: number;
    category: {
      name: string;
    };
  }
 