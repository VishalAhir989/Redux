import React, { Component } from "react";
import Slider from "react-slick";
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return(
        <div id="banner">
            <div className="col-12">
                <div className="banner-main">
                <Slider {...settings}>
                    <div className="col-12">
                        <div className="banner2-img d-flex justify-content-center align-items-center">
                            <div className="banner-head">
                                <h4 className="text-center">We Make Pizza Like a Pro</h4>
                                <h2 className="text-center">Real Italian Pizaa in Town</h2>
                                <div className="banner-button text-center mt-5">
                                    <a href="#">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="banner1-img d-flex justify-content-center align-items-center">
                            <div className="banner-head">
                                <h4 className="text-center">Authentic Italian Pizzas</h4>
                                <h2 className="text-center">The Best Pizza in Town</h2>
                                <div className="banner-button text-center mt-5">
                                    <a href="#">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    )
}
export default Banner