

import { getProductData } from "../../../../hooks/getProductData";
import ProductDetails from "@/app/productdetails/ProductDetails";
export async function generateStaticParams() {
  const data = await getProductData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

export default async function page({ params }: { params: any }) {
  const data = await getProductData();
  const filteredData = data.find(
    (item: any) => item.slug.current == params.product
  );

  return <ProductDetails filteredData={filteredData} />;
}