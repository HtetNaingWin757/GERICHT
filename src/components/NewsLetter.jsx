import React, { useEffect, useRef } from "react";
import spoon from "../assets/spoon.png";
import { motion, useAnimation, useInView } from "framer-motion";

const formVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};

const NewsLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const formAni = useAnimation();

  useEffect(() => {
    if (isInView) {
      formAni.start("show");
    }
  }, [isInView]);

  return (
    <div ref={ref} className=" flex md:px-16 flex-wrap justify-center items-center relative">
      <div className=" md:py-56 bg-black z-0 absolute top-0 left-0 w-full"></div>
      <motion.div
        className=" flex flex-wrap w-full z-10 mt-24 justify-center items-center flex-col gap-10 py-7 px-7 md:px-16 xl:px-20 bg-black md:border md:border-primary"
        variants={formVariants}
        initial="hidden"
        animate={formAni}
      >
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl md:text-2xl text-white font-Cormorant font-semibold">
            Newsletter
          </h3>
          <img src={spoon} alt="" />
        </div>
        <div className=" text-center mt-[-10px]">
          <h1 className="text-5xl leading-relaxed md:text-6xl mb-3 tracking-wider text-primary font-Cormorant font-semibold">
            Subscribe To Our Newsletter
          </h1>
          <p className=" text-white font-OpenSan text-xs md:text-base">
            And Never Miss Latest Updates!
          </p>
        </div>
        <div className=" w-full flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-5">
          <input
            type="text"
            placeholder="Enter your email address"
            className=" w-full font-Cormorant bg-transparent text-white text-md outline-none rounded-md border border-primary py-2 px-3"
          />
          <button className="btn transition-all duration-300 ease-linear px-5 font-Cormorant py-3 bg-btn rounded-md text-black text-sm font-semibold">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
