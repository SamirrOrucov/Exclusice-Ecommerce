import React from 'react'
import Slider from "react-slick";
import FlashSalesCard from '../FlashSalesCard';
function Carousel() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }
        return (
      <div>
        <Slider {...settings}>
          <div>
            <FlashSalesCard/>
          </div>
          <div>
          <FlashSalesCard/>

          </div>
          <div>
          <FlashSalesCard/>

          </div>
          <div>
          <FlashSalesCard/>

          </div>
          <div>
          <FlashSalesCard/>

          </div>
          <div>
          <FlashSalesCard/>

          </div>
        </Slider>
      </div>
    );
        }


export default Carousel