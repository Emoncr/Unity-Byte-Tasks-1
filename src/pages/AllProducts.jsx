import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Product from '../components/Product'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import Loading from '../components/loading';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    //============ Loading Fake Products Here ===========//
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch("https://fakestoreapi.com/products?limit=20");
                if (res.ok) {
                    const products = await res.json();
                    setLoading(false);
                    setProducts(products)
                    setError(false)
                }
                else {
                    setLoading(false);
                    setError(true)
                    console.log("Product't not found");
                }
            } catch (error) {
                setLoading(false);
                setError(true)
                console.log(error);
            }
        })()
    }, [])



    //========= Start SLider Functions ===========//
    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 left-0 z-10   -translate-y-1/2 p-2 sm:p-4 rounded-full bg-whtie flex items-center justify-center cursor-pointer shadow-btnShadow bg-white hover:bg-brand duration-300 text-gray-400 hover:text-white '
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
    //========= End SLider Functions ===========//

    return (
        <>
            <section className='py-10 sm:py-16 '>
                {
                    loading ?
                        <div>
                            <Loading />
                        </div>
                        :
                        <div className="container">
                            <h1 className='text-center text-xl md:text-4xl  font-heading text-brand font-bold mb-10 uppercase'>Task NO - 01</h1>
                            <div className='relative z-10'>
                                <Slider  {...settings}>
                                    {
                                        products.length != 0 &&
                                        products.map(pd =>
                                            <Product key={pd.id} productDetails={pd} ></Product>
                                        )
                                    }
                                </Slider>
                                <div className='hidden sm:block absolute top-1/2 right-0 left-0 -z-10  -translate-y-1/2 bg-[#d5d5d5] h-[1px]'></div>
                            </div>

                            {
                                error && <p className='text-xl text-center text-red-700 font-heading font-bold mt-10'>No Products Found from API</p>
                            }
                        </div>
                }
            </section>

        </>
    )
}

export default AllProducts