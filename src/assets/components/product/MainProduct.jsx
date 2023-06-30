import React from 'react';

import ProductCard from '@/assets/components/product/ProductCard';

const MainProduct = () => {
  return (
    <main className="my-6 mx-1 md:mt-1 md:mx-0">
      <div className="flex justify-center">
        <div className="max-w-screen-lg">
          <div className=" grid grid-cols-4 md:grid-cols-1 md:mx-auto gap-1 ">

            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainProduct;

