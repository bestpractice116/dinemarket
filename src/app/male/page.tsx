"use client";

import { useEffect, useState } from "react";
import Wrapper from "../../../components/shared/Wrapper";
import { getMaleData, getMaleDataProps } from "../../../hooks/getMaleData";
import MaleProduct from "./components/MaleProduct";
import Loader from "./components/Loader";

const MaleData = () => {
  const [male, setMale] = useState<getMaleDataProps[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getMaleData();
        setMale(product);
        setLoading(false); // Data loaded, set loading to false
        console.log(product);
      } catch (error) {
        console.log("Error fetching Male product data:", error);
        setLoading(false); // Error occurred, set loading to false
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-20">
      <Wrapper>
        {loading ? (
          <Loader /> // Display the loader while data is being fetched
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-center items-center">
            {male.map((item) => (
              <div key={item._id} className="cursor-pointer">
                <MaleProduct item={item} />
              </div>
            ))}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default MaleData;
