import React, { useState } from "react";
import carouselImages from "../../pagedata/caroudelData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {BiLeftArrowAlt,BiRightArrowAlt} from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"
import { motion } from "framer-motion";

const imgHover = {
  hidden : {
    opacity : 0
  },
  show : {
    opacity : 1,
    transition : {
      duration : 0.5,
    }
  }
}

const Carousel = () => {
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='btn p-1 rounded-md bg-black text-primary text-2xl absolute z-10 bottom-5 right-3'
        onClick={onClick}
      >
        <BiRightArrowAlt/>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const {onClick } = props;
    return (
      <div
        className="btn p-1 rounded-md bg-black text-primary text-2xl absolute z-10 bottom-5 left-3"
        onClick={onClick}
      >
        <BiLeftArrowAlt/>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className='relative'>
      <Slider {...settings}>
        {carouselImages.map((img, index) => {
          return (
            <div key={index} className=" relative z-0 h-[450px] md:h-[500px] w-full">
              <img src={img.path} className=" h-full w-full" alt="" />
              <motion.div className=" absolute z-1 inset-0 bg-[#00000098] text-white text-3xl flex justify-center items-center"
                variants={imgHover}
                initial='hidden'
                whileHover='show'
              >
                <BsInstagram/>
              </motion.div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
