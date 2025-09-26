import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageone from "../component/assest/kidsone.jpg";
import imagetwo from "../component/assest/kidstwo.jpg";
import imagethree from "../component/assest/kidsthree.jpg";
import imagefour from "../component/assest/kidsfour.jpg";
import imagefive from "../component/assest/kidsfive.jpg";
import { Box } from "@mui/material";

class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,            // show dots
      infinite: true,        // infinite loop
      speed: 500,            // transition speed
      slidesToShow: 1,       // show 1 image
      slidesToScroll: 1,     // scroll 1 image
      autoplay: true,        // autoplay
      autoplaySpeed: 3000,   // every 3 seconds
      arrows: true,          // show arrows
    };

    const images = [
      imageone, 
      imagetwo,
      imagethree,
      imagefour,
      imagefive,
    ];

    return (
      <Box className="w-[800px] mx-auto mt-10 shadow-lg rounded-2xl overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-[400px] object-cover"
                style={{height:"350px", width:"1520px"}}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    );
  }
}

export default ImageSlider;
