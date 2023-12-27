import React from 'react'
import { FaCartPlus, FaStar } from "react-icons/fa";
const Product = ({ productDetails }) => {
    console.log(productDetails);
    const { title, category, description, id, image, price, rating } = productDetails
    return (
        <div className='grid grid-cols-12 md:grid-cols-2 gap-4 '>
            <div className='flex items-center justify-center col-span-4'>
                <img className='max-w-[150] max-h-[150px] object-cover' src={image} alt="Product Image" />
            </div>
            <div className='col-span-8'>
                <div className="rating flex items-center justify-start text-yellow-500 text-sm sm:text-base">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className='text-gray-400' />
                </div>
                <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.3] font-heading font-bold text-headign truncate mt-2 '>{title}</h3>
                <p className='text-brand font-content font-bold text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.3] mt-1'>${price}</p>
                <p className='text-content font-normal text-sm line-clamp-2 sm:line-clamp-3  '>{description}</p>
                <div className="add_to_cart">
                    <button className='bg-brand px-5 py-2 rounded-full text-xs font-heading text-white font-semibold uppercase mt-2' >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product