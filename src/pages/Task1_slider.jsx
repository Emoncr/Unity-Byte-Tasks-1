import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Product from '../components/Product'

const Task1_slider = () => {

    const [products, setProducts] = useState([])


    //============ Loading Fake Products Here ===========//
    useEffect(() => {
        (async () => {
            const res = await fetch("https://fakestoreapi.com/products?limit=8");
            if (res.ok) {
                const products = await res.json();
                setProducts(products)
            }
            else {
                console.log("Product't not found");
            }
        })()
    }, [])
    // console.log(products);


    //====SLider Functions=====//
    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute bottom-0 left-5 z-10   p-2 px-5 sm:px-8 sm:p-4 sm:py-3 rounded-s-md bg-brand-blue flex items-center justify-center border-2 border-transparent cursor-pointer shadow-lg hover:bg-white/90 
            hover:border-2 hover:border-brand-blue  duration-300 group sm:right-32  sm:left-auto'
                onClick={onClick}
            >
                <BsArrowLeft className='text-white text-xl sm:text-xl group-hover:text-brand-blue ' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div
                className='absolute bottom-0 right-5 sm:right-2 px-5 sm:px-8 sm:py-3 z-10  p-2 sm:p-4 rounded-e-md bg-brand-blue flex items-center justify-center border-2 border-transparent cursor-pointer shadow-lg hover:bg-white/90 duration-300 group hover:border-brand-blue'
                onClick={onClick}
            >
                <BsArrowRight className='text-white text-xl sm:text-xl group-hover:text-brand-blue ' />
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: false,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='py-10 sm:py-16 '>
                <div className="container">
                    {/* <Slider   {...settings}>

                    </Slider> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-20'>
                        {
                            products.map(productDetails => <Product productDetails={productDetails} ></Product>)
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Task1_slider