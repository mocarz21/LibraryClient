import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./AdvertisementSlider.scss"

export default class AdvertismentSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 9000,
    };
    return (
      <div className="advertisment-slider-module">
        <Slider {...settings} >
          <div>
            <img src="./reklama.jpg"/>
          </div>
          <div>
            <img src="./reklama1.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}