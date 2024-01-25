import React, { Component } from "react";
import Slider from "react-slick";
const Experts = () => {
    var settings = {
        // lazyLoad: 'ondemand',
    slidesToShow: 4,
    // cssEase: 'linear',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false,
        }
      }

    ]
      };
  return (
    <>
      <div className="experts-img-2">
        <img src="../../../../public/experts2.png" alt="experts2" />
      </div>
      <div id="experts">
        <div className="container">
            <div className="row">
            <div className="experts-head">
                    <h4 className="text-center mt-4 mb-2">Meet our experts</h4>
                    <h2 className="text-center mb-4">OUR SPECIALITY</h2>
                </div>
                <Slider {...settings}>
                    <div className="col-3">
                        <div className="experts-contain">
                            <div className="experts-img">
                                <img src="../../../../public/expert1.png" alt="expert1" />
                            </div>
                            <div className="experts-contain-m text-center">
                              <a href="#">Thomas Keller</a>
                              <h4 className="m-0">Sous Chef</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="experts-contain">
                            <div className="experts-img">
                                <img src="../../../../public/expert2.png" alt="expert2" />
                            </div>
                            <div className="experts-contain-m text-center">
                              <a href="#">Alain Ducasse</a>
                              <h4 className="m-0">Sous Chef</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="experts-contain">
                            <div className="experts-img">
                                <img src="../../../../public/expert3.png" alt="expert3" />
                            </div>
                            <div className="experts-contain-m text-center">
                              <a href="#">Nigella Lawson</a>
                              <h4 className="m-0">Sous Chef</h4>
                            </div>
                        </div>
                    </div>
                    <div className="c0l-3">
                        <div className="experts-contain">
                            <div className="experts-img">
                                <img src="../../../../public/expert4.png" alt="expert3" />
                            </div>
                            <div className="experts-contain-m text-center">
                              <a href="#">Jamie Oliver</a>
                              <h4 className="m-0">Sous Chef</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="experts-contain">
                            <div className="experts-img">
                                <img src="../../../../public/expert2.png" alt="expert2" />
                            </div>
                            <div className="experts-contain-m text-center">
                            <a href="#">Alain Ducasse</a>
                              <h4 className="m-0">Sous Chef</h4>
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
  );
};

export default Experts;
