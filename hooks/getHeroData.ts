import { client } from "../sanity/lib/client";

export const getHeroData = async () => {
    const res = await client.fetch(`*[_type == 'herobanner']{
    _id,
    sale,
    herotext,
    heropara,
    buttontext,
  }`);
    return res;
  };
 export interface IBanner {
    id: string;
    sale: string;
    herotext: string;
    heropara: string;
    buttontext: string;
  }