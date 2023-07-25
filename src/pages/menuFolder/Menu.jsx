import React, { useEffect, useRef } from "react";
import spoon from "../../assets/spoon.png";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import menuImg from "../../assets/menu.png";
import { motion, useAnimation, useInView } from "framer-motion";

const headerVariants = {
  hidden: {
    y: -150,
    scale: 0,
  },
  show: {
    y: 0,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};

const todayHeader = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
};

const imgVariants = {
  hidden: {
    y: "150%",
  },
  show: {
    y: 0,
    transition: {
      delay: 2,
      duration: 2,
    },
  },
};

const btnVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const Menu = () => {
  const ref = useRef(null);
  const btnRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const btnInView = useInView(btnRef, { once: true });

  const headerAni = useAnimation();
  const todayHeaderAni = useAnimation();
  const imgAni = useAnimation();
  const btnAni = useAnimation();

  useEffect(() => {
    if (isInView) {
      headerAni.start("show");
      todayHeaderAni.start("show");
      imgAni.start("show");
    }
    if (btnInView) {
      btnAni.start("show");
    }
  }, [isInView, btnInView]);

  return (
    <div id="menu" className="overflow-hidden bg-black px-7 md:px-16 xl:px-0 py-20">
      <div
        ref={ref}
        className="flex flex-col justify-center items-center gap-5"
      >
        <motion.div
          className="flex text-white text-xl md:text-2xl font-Cormorant font-semibold justify-between flex-col items-center"
          variants={headerVariants}
          initial="hidden"
          animate={headerAni}
        >
          <h3>Menu That Fits Your Palatte</h3>
          <img src={spoon} alt="" />
        </motion.div>
        <motion.h1
          className=" text-5xl md:text-7xl font-Cormorant font-semibold text-primary"
          variants={todayHeader}
          initial="hidden"
          animate={todayHeaderAni}
        >
          Today's Special
        </motion.h1>
      </div>
      <div className=" flex flex-col xl:flex-row p-0 xl:ps-20 mt-16 xl:pe-24 justify-center items-center xl:justify-between xl:items-start gap-10">
        <div className="w-full xl:w-[30%] py-5">
          <LeftMenu />
        </div>
        <div className=" w-full md:w-[400px] h-[535px] xl:h-[720px] overflow-y-hidden">
          <motion.div variants={imgVariants} initial="hidden" animate={imgAni}>
            <img src={menuImg} className=" h-full" alt="" />
          </motion.div>
        </div>
        <div className="w-full xl:w-[30%] py-5">
          <RightMenu />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <motion.button
          ref={btnRef}
          className="btn transition-all duration-300 ease-linear px-5 mt-20 font-Cormorant py-3 bg-btn rounded-md text-black font-semibold"
          variants={btnVariants}
          initial="hidden"
          animate={btnAni}
        >
          View More
        </motion.button>
      </div>
    </div>
  );
};

export default Menu;
