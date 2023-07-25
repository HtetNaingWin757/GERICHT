import React, { useEffect, useRef } from "react";
import spoon from "../../assets/spoon.png";
import Carousel from "./Carousel";
import { motion, useAnimation, useInView } from "framer-motion";

const leftVariants = {
  hidden: {
    x: -800,
  },
  show: {
    x: 0,
  },
};

const carouselVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const GalleryContainer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const leftAni = useAnimation();
  const carouselAni = useAnimation();

  useEffect(() => {
    if (isInView) {
      leftAni.start("show");
      carouselAni.start("show");
    }
  }, [isInView]);

  return (
    <div className="flex px-7 md:px-16 xl:px-0 flex-wrap items-center justify-between gap-5 py-20 bg-black">
      <div ref={ref} className="ms-0 xl:ms-24">
        <motion.div
          className=" mb-7"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <h3 className=" text-xl md:text-2xl text-white font-Cormorant font-semibold">
            Instagram
          </h3>
          <img src={spoon} alt="" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl text-primary font-Cormorant font-semibold mb-12"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          className="mb-5 text-secondary font-OpenSan text-xs md:text-base"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 2, duration: 1.5 }}
        >
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis <br /> Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </motion.p>
        <motion.button
          className="btn transition-all duration-300 ease-linear px-5 font-Cormorant py-3 bg-btn rounded-md text-black font-semibold"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          View More
        </motion.button>
      </div>
      <motion.div
        className="w-full xl:w-[45%]"
        variants={carouselVariants}
        initial="hidden"
        animate={carouselAni}
      >
        <Carousel />
      </motion.div>
    </div>
  );
};

export default GalleryContainer;
