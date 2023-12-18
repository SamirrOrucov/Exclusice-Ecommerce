import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
function CarouselSection() {
  return (
    <div id="carouselSection">
      <div className="carouselSection_container">
        <div className="categories">
          <ul>
            <div className="all">
              <li>Woman’s Fashion</li> <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="all">
              <li>Men’s Fashion</li> <i class="fa-solid fa-chevron-right"></i>
            </div>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="slider">
            <div className="slider_main">
          <div className="slider_text">
            <div className="icn">
              <img
                src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1703462400&Signature=Ehc6r~QIMMYJt8QLVDfUs8VIY4el~esNY7mbbDhFI0B47RHrpjHJlCktxQE0MNvv~i08cM-JHGG0Sq4PFlHlXl3NWjedT~51T0d5PMkfY0IfO651hTzbDRjqLhmgOQZLoz1Bn6LIzU-uCKLQgkrbLx6PjRnCPb-knvLJKm5OnWA5rxQ2FFSFSykW2GCi~Nj-d6BT1dwHJOwV4bgDNhuqVVMCSJSi7AHGc2t26qYYSn23PAo~5Pe3pcY4eSxW8Zc~Dxzmdu9qTh3XICQAPwl1FS6zYbaLHuwFCewordykdmKcqYD8jpeeMlGbK~wT7QWTWPdY1sF1OKXGhPYX94fw4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <p>iPhone 14 Series</p>
            </div>
            <div className="slogan">
                <p>Up to 10% off Voucher</p>
            </div>
            <div className="link">
                <Link to={"https://www.amazon.de/"}>Shop Now </Link><i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="image">
            <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1703462400&Signature=ko36RgioWSRNeKD~P2xV4W6NJYSC8OHYlnjNWOsBUkhS0zKbfyg2GCfUF3W1gPRgV1cuG7G8AcS3nDB-4ZaKUW8s5BjDve-5qoQRORRtq1BGZLEEtgzPi7bdhdr8djxfT9am~c-EYB4S3Gx6TKZo6s8GEVN9Q7OzZuMFUH21T3s7HzMUgHWDqMOqBVRlhlAM~FpFinlPhPmjsi89Ls1fkHWuHX9rksABYQd~Ve8omf8E1J~LK7OGYCqDRqCvD0oQCX2Wcn1hyeOaer7htTeejrKxD6qlACCop9utRtUV1AYGi2wYdD5uQ-Uh54EgI10WPymykVjfcbn~UAX-iQsoWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
          </div>
             <div className="balls">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle opacity="0.5" cx="6" cy="6" r="6" fill="white"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle opacity="0.5" cx="6" cy="6" r="6" fill="white"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <circle cx="7" cy="7" r="5" fill="#DB4444"/>
  <circle cx="7" cy="7" r="6" stroke="white" stroke-width="2"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle opacity="0.5" cx="6" cy="6" r="6" fill="white"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<circle opacity="0.5" cx="6" cy="6" r="6" fill="white"/>
</svg>
        </div>
        </div>
     
      </div>
    </div>
  );
}

export default CarouselSection;
