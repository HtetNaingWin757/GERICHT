import React, { useEffect, useRef } from "react";
import spoon from "../../assets/spoon.png";
import knife from "../../assets/knife.png";
import G from "../../assets/G.png";
import { motion, useAnimation, useInView } from "framer-motion";

const leftHeader = {
  headerHide: {
    x: -600,
  },
  headerShow: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

const leftP = {
  pHidden: {
    x: -800,
  },
  pShow: {
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const leftBtn = {
  btnHidden: {
    x: -800,
  },
  btnShow: {
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const rightHeader = {
  headerHide: {
    x: 600,
  },
  headerShow: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

const rightP = {
  pHidden: {
    x: 800,
  },
  pShow: {
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const rightBtn = {
  btnHidden: {
    x: 800,
  },
  btnShow: {
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const knifeVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInVisible = useInView(ref, { once: true });

  const leftHeaderAni = useAnimation();
  const leftPAni = useAnimation();
  const leftBtnAni = useAnimation();
  const rightHeaderAni = useAnimation();
  const rightPAni = useAnimation();
  const rightBtnAni = useAnimation();
  const knifeAni = useAnimation();

  useEffect(() => {
    if (isInVisible) {
      leftHeaderAni.start("headerShow");
      leftPAni.start("pShow");
      leftBtnAni.start("btnShow");
      rightHeaderAni.start("headerShow");
      rightPAni.start("pShow");
      rightBtnAni.start("btnShow");
      knifeAni.start("show");
    }
  }, [isInVisible]);

  const backGroundStyle = {
    backgroundSize: "400px",
    backgroundImage: `url(${G})`,
  };

  return (
    <div
      id="about"
      className=" px-7 py-20 md:px-16 xl:px-0 xl:bg-contain bg-center bg-no-repeat"
      style={backGroundStyle}
    >
      <div className=" flex flex-wrap xl:ps-20 xl:pe-24 justify-center xl:justify-between items-center">
        <div
          ref={ref}
          className=" w-full xl:w-[40%] flex flex-col items-end justify-center gap-10"
        >
          <motion.div
            className="font-Cormorant flex flex-col items-end text-5xl md:text-6xl text-primary font-semibold"
            variants={leftHeader}
            initial="headerHide"
            animate={leftHeaderAni}
          >
            <h3>About Us</h3>
            <img src={spoon} alt="" />
          </motion.div>
          <motion.p
            className="text-sm md:text-lg text-secondary text-right"
            variants={leftP}
            initial="pHidden"
            animate={leftPAni}
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </motion.p>
          <motion.button
            className="btn transition-all duration-300 ease-linear w-[40%] md:w-[30%] font-Cormorant py-3 bg-btn rounded-md text-black font-semibold"
            variants={leftBtn}
            initial="btnHidden"
            animate={leftBtnAni}
          >
            Know More
          </motion.button>
        </div>
        <div className=" h-[810px] w-24">
          <motion.div
            variants={knifeVariants}
            initial="hidden"
            animate={knifeAni}
          >
            <img className=" w-24 xl:w-72" src={knife} alt="" />
          </motion.div>
        </div>
        <div className="w-full xl:w-[40%] flex flex-col items-start justify-center gap-10">
          <motion.div
            className="font-Cormorant flex flex-col items-start text-5xl md:text-6xl text-primary font-semibold"
            variants={rightHeader}
            initial="headerHide"
            animate={rightHeaderAni}
          >
            <h3>Our History</h3>
            <img src={spoon} className=" rotate-180" alt="" />
          </motion.div>
          <motion.p
            className="text-sm md:text-lg text-secondary text-left"
            variants={rightP}
            initial="pHidden"
            animate={rightPAni}
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
            Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
            Odio Nec Aliquet Eu Proin Mauris Et.
          </motion.p>
          <motion.button
            className="btn transition-all duration-300 ease-linear w-[40%] md:w-[30%] font-Cormorant py-3 bg-btn rounded-md text-black font-semibold"
            variants={rightBtn}
            initial="btnHidden"
            animate={rightBtnAni}
          >
            Know More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
