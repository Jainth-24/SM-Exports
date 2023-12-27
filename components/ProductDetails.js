import { useState } from 'react'
import BackToProductButton from './BackToProductButton'
import ProductInfo from './ProductInfo'


function ProductDetails({ productData }) {
 
  return (
      <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128 min-w-[70%]">
          <BackToProductButton />
          <ProductInfo
              title={productData?.content?.title}
              description={productData?.content?.long_description}
              price={productData?.content?.price}
          />
      </div>
  );
}

export default ProductDetails
