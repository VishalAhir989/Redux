import React, { Component } from "react";
import Slider from "react-slick";
const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <>
            <div className="experts-img-2">
                <img src="../../../../public/experts2.png" alt="experts2" />
            </div>


            <div id="reviews">
                <div className="container">
                    <div className="row">
                        <div className="reviews-head">
                            <div className="reviews-head">
                                <h4 className="text-center mt-4 mb-2">What Say Our Clients</h4>
                                <h2 className="text-center mb-4">CUSTOMER REVIEWS</h2>   
                            </div>
                        </div>
                        <Slider {...settings}>
                            <div className="col-12 reviews-contain d-flex ">
                                <div className="col-2">
                                    <div className="reviews-img d-flex align-items-center justify-content-center">
                                        <img src="../../../../public/reviews1.png" alt="reviews1" />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="reviews-c">
                                        <p>What a fantastic pizza experience! The variety of pizzas on the menu is impressive, and I love how you can customize your own. The online ordering process was seamless, and the staff was friendly and accommodating. The pizza tasted amazing - it's evident they use high-quality ingredients. I'll definitely be ordering from here again!</p>
                                        <a href="#">JOHN - designer</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 reviews-contain d-flex ">
                                <div className="col-2">
                                    <div className="reviews-img d-flex align-items-center justify-content-center">
                                        <img src="../../../../public/reviews2.png" alt="reviews2" />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="reviews-c">
                                        <p>What a fantastic pizza experience! The variety of pizzas on the menu is impressive, and I love how you can customize your own. The online ordering process was seamless, and the staff was friendly and accommodating. The pizza tasted amazing - it's evident they use high-quality ingredients. I'll definitely be ordering from here again!</p>
                                        <a href="#">JOHN - designer</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 reviews-contain d-flex ">
                                <div className="col-2">
                                    <div className="reviews-img d-flex align-items-center justify-content-center">
                                        <img src="../../../../public/reviews3.png" alt="reviews3" />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="reviews-c">
                                        <p>What a fantastic pizza experience! The variety of pizzas on the menu is impressive, and I love how you can customize your own. The online ordering process was seamless, and the staff was friendly and accommodating. The pizza tasted amazing - it's evident they use high-quality ingredients. I'll definitely be ordering from here again!</p>
                                        <a href="#">JOHN - designer</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>



            <div className="experts-img-2">
                <img src="../../../../public/experts1.png" alt="experts1" />
            </div>
        </>
    )
}
export default Reviews