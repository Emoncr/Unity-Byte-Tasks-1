import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Product from '../components/Product'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const Task1_slider = () => {
    const [products, setProducts] = useState([])

    //============ Loading Fake Products Here ===========//
    useEffect(() => {
        (async () => {
            const res = await fetch("https://fakestoreapi.com/products?limit=20");
            if (res.ok) {
                const products = await res.json();
                setProducts(products)
            }
            else {
                console.log("Product't not found");
            }
        })()
    }, [])



    //========= SLider Functions ===========//
    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 left-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-full bg-whtie flex items-center justify-center cursor-pointer shadow-btnShadow hover:bg-brand duration-300 text-gray-400 hover:text-white '
                onClick={onClick}
            >
                <TfiAngleLeft className='text-lg sm:text-2xl' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 right-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-btnShadow hover:bg-brand duration-300 text-gray-400 hover:text-white'
                onClick={onClick}
            >
                <TfiAngleRight className='text-lg sm:text-2xl' />
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: false,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                }
            }
        ]
    };


    return (
        <>
            <section className='py-10 sm:py-16 '>
                <div className="container">
                    <Slider {...settings}>
                        {
                            products.length != 0 ?
                                products.map(pd =>
                                    <Product productDetails={pd} ></Product>
                                )
                                :
                                <p className='text-center text-3xl mt-20'>No products Found</p>

                        }
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default Task1_slider