import { client } from "@/app/lib/sanityClient";
import { Image } from "sanity";

export const getKidsData = async () => {
  const res =
    await client.fetch(`*[_type == 'product' && category->name == 'Kids'] {
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

export interface getKidsDataProps {
  _id: number;
  title: string;
  image: Image;
  price: number;
  category: {
    name: string;
  };
}
