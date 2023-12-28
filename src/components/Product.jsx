import React from 'react'
import { FaHeart, FaStar, FaSearch } from "react-icons/fa";




const Product = ({ productDetails }) => {
    const { title, description, id, image, price, } = productDetails
    
    return (
        <div className='grid grid-cols-12 gap-4 items-start transition-all duration-300 group'>
            <div className='flex items-center justify-center col-span-12 min-[480px]:col-span-5 relative cursor-pointer'>
                <img className='w-[150px] h-[150px] sm:w-[300px] sm:h-[230px]  p-4 -z-10 object-contain' src={image} alt="Product Image" />
                <div className="absolute bottom-0 top-0 left-0 right-0 hidden group-hover:block rounded-sm bg-brand-blue py-1 px-2 bg-black/20">
                </div>

                {/* Buttons Container */}
                <div className="absolute top-1/2 -translate-y-1/2  left-auto right-auto hidden group-hover:block rounded-sm bg-brand-blue  ">
                    <div className='flex items-center justify-center gap-2 sm:gap-3'>
                        <button className='bg-white p-3 rounded-full text-xs sm:text-base text-gray-400 hover:text-brand'>
                            <FaHeart />
                        </button>
                        <button className='bg-white p-3 rounded-full text-sm sm:text-base  text-gray-400 hover:text-brand'>
                            {/* <MdOutlineChangeCircle /> */}
                            <svg
                                className="feather feather-refresh-ccw w-[13px] h-[13px] sm:w-5 sm:h-5"
                                fill="none"

                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"

                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="1 4 1 10 7 10" />
                                <polyline points="23 20 23 14 17 14" />
                                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                            </svg>
                        </button>
                        <button className='bg-white p-3 rounded-full text-xs sm:text-base text-gray-400 hover:text-brand'>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>


            {/* ======= Product Informations ======= */}
            <div className='col-span-12  min-[480px]:col-span-7 '>
                <div>
                    <div className="rating flex items-center justify-start text-yellow-500 text-sm sm:text-base">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className='text-gray-400' />
                    </div>
                    <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.3] font-heading font-bold text-headign truncate mt-2 '>{title}</h3>
                    <p className='text-brand font-content font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.3] mt-1'>${price}</p>
                    <p className='text-content font-normal text-sm md:text-base line-clamp-2 sm:line-clamp-3 sm:mt-1 '>{description}</p>
                    <div className="add_to_cart">
                        <button className='bg-brand px-5 py-2 lg:px-7 lg:py-3 rounded-full text-xs font-heading text-white font-semibold uppercase mt-2 sm:mt-4 hover:bg-brand/90 lg:hidden  group-hover:block' >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product