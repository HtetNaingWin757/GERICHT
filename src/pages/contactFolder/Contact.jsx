import React, { useEffect, useRef } from "react";
import contactImg from "../../assets/findus.png";
import spoon from "../../assets/spoon.png";
import { motion, useAnimation, useInView } from "framer-motion";

const leftVariants = {
  hidden: {
    x: -800,
  },
  show: {
    x: 0,
  },
};

const imgVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const leftAni = useAnimation();
  const imgAni = useAnimation();

  useEffect(() => {
    if (isInView) {
      leftAni.start("show");
      imgAni.start("show");
    }
  }, [isInView]);

  return (
    <div
      id="contact"
      className=" flex flex-wrap justify-center xl:justify-between items-center my-20 px-7 md:px-16 xl:px-24"
    >
      <div className=" w-full xl:w-[50%]" ref={ref}>
        <motion.div
          className=" mb-7"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <h3 className="text-xl md:text-2xl text-white font-Cormorant font-semibold">
            Contact
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
          Find Us
        </motion.h1>
        <motion.p
          className="mb-7 text-white font-OpenSan text-xs md:text-base"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 2, duration: 1.5 }}
        >
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </motion.p>
        <motion.h3
          className="text-xl md:text-2xl font-semibold font-Cormorant text-primary mb-7"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          Opening Hours
        </motion.h3>
        <motion.p
          className="text-sm md:text-lg text-white font-OpenSan"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 3, duration: 1.5 }}
        >
          Mon - Fri: 10:00 Am - 02:00 Am
        </motion.p>
        <motion.p
          className="text-sm md:text-lg text-white font-OpenSan mb-7"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 3, duration: 1.5 }}
        >
          Sat - Sun: 10:00 Am - 03:00 Am
        </motion.p>
        <motion.button
          className="btn transition-all duration-300 ease-linear px-5 font-Cormorant py-3 bg-btn rounded-md text-black font-semibold"
          variants={leftVariants}
          initial="hidden"
          animate={leftAni}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          Visit Us
        </motion.button>
      </div>
      <motion.div
        className=" w-full xl:w-[40%] mt-14 xl:mt-0 xl:me-14"
        variants={imgVariants}
        initial="hidden"
        animate={imgAni}
      >
        <img src={contactImg} alt="" />
      </motion.div>
    </div>
  );
};

export default Contact;
