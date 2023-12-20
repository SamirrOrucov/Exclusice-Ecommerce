import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FlashSalesCard from "../FlashSalesCard";
function Carousel() {
  const [produts, setProduts] = useState([]);
  async function getfetch() {
    const res = await fetch(
      "https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products"
    );
    const data = await res.json();
    setProduts(data);
  }
  useEffect(() => {
    getfetch();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {produts.map((item) => (
          <div>
            <FlashSalesCard
              item={item}
              img={item.image}
              discount={item.persentage}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              comments={item.comments}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
