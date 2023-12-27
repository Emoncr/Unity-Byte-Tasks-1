import React from 'react'
import { FaStar } from "react-icons/fa";
const Product = ({ productDetails }) => {
    console.log(productDetails);
    const { title, category, description, id, image, price, rating } = productDetails
    return (
        <div className='grid grid-cols-12 gap-4  items-center'>
            <div className='flex items-center justify-center col-span-12 min-[480px]:col-span-5   bg-red-200 z-10 '>
                <img className='w-[150px] h-[150px] sm:w-[300px] sm:h-[230px]  p-4 -z-10 object-contain' src={image} alt="Product Image" />
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
                        <button className='bg-brand px-5 py-2 lg:px-7 lg:py-3 rounded-full text-xs font-heading text-white font-semibold uppercase mt-2 sm:mt-4' >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product