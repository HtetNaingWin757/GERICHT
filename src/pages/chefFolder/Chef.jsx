import React, { useEffect, useRef } from "react";
import chef from "../../assets/chef.png";
import spoon from "../../assets/spoon.png";
import quote from "../../assets/quote.png";
import sign from "../../assets/sign.png";
import { motion, useAnimation, useInView } from "framer-motion";

const variants = {
  hidden: {
    scale: 0,
    originX: 0,
  },
  show: {
    scale: 1,
  },
};

const Chef = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const AniControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      AniControls.start("show");
    }
  }, [isInView]);

  return (
    <div className="flex flex-wrap justify-between items-center my-20 px-7 md:px-16 xl:px-28 gap-20">
      <motion.div
        className=" w-full xl:w-[40%]"
        variants={variants}
        initial="hidden"
        animate={AniControls}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <img src={chef} alt="" />
      </motion.div>
      <div ref={ref} className="w-full xl:w-[50%]">
        <motion.div
          className="text-xl md:text-3xl font-Cormorant font-semibold mb-10 text-white"
          variants={variants}
          initial="hidden"
          animate={AniControls}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <h3>Chef's Word</h3>
          <img src={spoon} alt="" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl leading-normal font-Cormorant font-semibold text-primary"
          variants={variants}
          initial="hidden"
          animate={AniControls}
          transition={{ delay: 2, duration: 1.5 }}
        >
          What We Believe In
        </motion.h1>
        <motion.p
          className=" mt-20 text-xs md:mt-28 md:text-base tracking-wider leading-[2.5] text-white font-OpenSan"
          variants={variants}
          initial="hidden"
          animate={AniControls}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          <span className=" flex items-center gap-7">
            <img className=" w-12 md:w-14" src={quote} alt="" /> Lorem Ipsum Dolor Sit
            Amet, Consectetur Adipiscing Elit Auctor Sit .
          </span>
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
          Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam 
          Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit 
          Nunc.
        </motion.p>
        <motion.div className=" flex flex-col gap-3 mt-16 md:mt-24"
          variants={variants}
          initial='hidden'
          animate={AniControls}
          transition={{delay : 3, duration : 1.5}}
        >
          <h3 className=" text-3xl md:text-4xl text-primary font-thin font-Cormorant">
            Kevin Luo
          </h3>
          <p className=" md:mt-3 text-xs md:text-xl text-white font-OpenSan">
            Chef & Founder
          </p>
        </motion.div>
        <motion.img src={sign} className=" h-[100px] mt-16 md:mt-24" alt="" 
          variants={variants}
          initial='hidden'
          animate={AniControls}
          transition={{delay : 3, duration : 1.5}}
        />
      </div>
    </div>
  );
};

export default Chef;
