import { client } from "@/app/lib/sanityClient";
import { Image } from "sanity";

export const getMaleData = async () => {
  const res =
    await client.fetch(`*[_type == 'product' && category->name == 'Male'] {
    _id,
    title,
    image,
    price,
    category->{
      name
    }
  }`);
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
}
