import React from 'react';
import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Rings
        height={80}
        width={80}
        color="#777777"
        radius={6}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
