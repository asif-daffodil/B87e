import Image from 'next/image';
import React from 'react';
import product1 from '@/assets/images/products/product1.webp';
import product2 from '@/assets/images/products/product2.webp';
import product3 from '@/assets/images/products/product3.webp';
import product4 from '@/assets/images/products/product4.webp';
import product5 from '@/assets/images/products/product5.webp';
import product6 from '@/assets/images/products/product6.webp';
import product7 from '@/assets/images/products/product7.webp';
import product8 from '@/assets/images/products/product8.webp';

const ProductList = () => {
    return (
        <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 sm:mb-10">Premium Threads</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product1} alt="Product 1"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">Lexicon Luxe</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$10</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>

        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product2} alt="Product 2"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">Adjective Attire</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$12</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>

        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product3} alt="Product 3"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">ThreadCraft Vibes</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$14</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>

        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product4} alt="Product 3"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">Verbal Vogue Tees</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$12</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>

        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product5} alt="Product 3"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">Jargon Jungle</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$15</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>

        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product6} alt="Product 3"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">Syllable Streetwear</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$14</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>

        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product7} alt="Product 3"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">Syllable Streetwear</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$14</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>

        <div className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
          <div className="w-full">
            <Image src={product8} alt="Product 3"
              className="w-full object-cover object-top aspect-[230/307]" />
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">Syllable Streetwear</h5>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">$14</h6>
                <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
            <button type="button" className="px-2 h-9 font-semibold w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductList;