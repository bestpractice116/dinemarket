import { client } from "@/app/lib/sanityClient";
import { Image, Slug } from "sanity";

export const getMaleData = async () => {
  const res = await client.fetch(`*[_type == 'product' && category->name == 'Male']`);
  return res;
};

export interface getMaleDataProps {
  _id: number;
  title: string;
  image: Image;
  price: number;
  category: {
    name: string;
  };
  slug: any;
}
