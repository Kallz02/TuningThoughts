import React from 'react';
import { Link } from 'react-router-dom';
import products from './products.json'; 

const renderCarouselItem = (product, index) => {
    return (
       (
        <div className="mx-3 carousel-item w-[320px]" key={index}>
          <Link
            className="flex flex-col bg-white rounded-lg border shadow-sm transition dark:bg-gray-900 dark:border-gray-700 hover:shadow-lg dark:shadow-slate-700/[.7]"
            to="/kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-auto rounded-t-lg w-[320px]"
              src={product.image}
              alt={product.name}
            />

            <div className="p-2 md:p-4">
              <h3 className="text-sm font-normal text-gray-800 dark:text-white">
                {product.name}
              </h3>
            </div>
          </Link>
        </div>
      )
    );
  };


const ProductCarousel = () => (
    <>
        <h1 className="my-5 text-3xl md:text-5xl dark:text-gray-100 carousel-heading">
            <center>Featured Products</center>
            <p className="text-sm text-center">Swipe &#62;&#62;</p>
        </h1>
        <div className="flex overflow-x-auto mx-auto mt-5 video-carousel-container max-w-[95rem]">
            <div className="mt-5 carousel-wrapper">
                <div className="flex video-carousel">
                    {products.map((product, index) => renderCarouselItem(product, index))}
                </div>
            </div>
        </div>
    </>
);

export default ProductCarousel;
