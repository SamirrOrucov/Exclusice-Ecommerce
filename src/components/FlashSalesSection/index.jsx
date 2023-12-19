import React from "react";
import "./index.scss";
import CountdownTimer from "../Counter";
import FlashSalesCard from "../FlashSalesCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel";
function FlashSalesSection() {
  return (
    <div id="flashSalesSection">
      <div className="time_Area">
        <div className="today">
          <div className="upper_area">
            <div className="color"></div>
            <p>Today's</p>
          </div>
          <div className="lower_area">
            <div className="p">Flash Sales</div>
            <CountdownTimer />
          </div>
        </div>
        <div className="products">
       
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default FlashSalesSection;
