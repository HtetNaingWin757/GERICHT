import React, { useEffect, useRef } from "react";
import spoon from "../../assets/spoon.png";
import AwardCard from "./AwardCard";
import laurel from "../../assets/laurels.png";
import { motion, useAnimation, useInView } from "framer-motion";

const variant = {
  hidden: {
    x: -1000,
  },
  show: {
    x: 0,
  },
};

const imgVariant = {
  hidden : {
    opacity : 0
  },
  show : {
    opacity : 1,
    transition : {
      delay : 1.5,
      duration : 2.5
    }
  }
}

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const aniControl = useAnimation();
  const imgControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      aniControl.start("show");
      imgControl.start('show')
    }
  }, [isInView]);

  return (
    <div id="awards" className=" flex flex-wrap my-20 px-7 md:px-16 xl:px-28 justify-between items-center">
      <div ref={ref} className="w-full xl:w-[55%]">
        <motion.div
          className=" mb-7"
          variants={variant}
          initial="hidden"
          animate={aniControl}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <h3 className=" text-xl md:text-2xl text-white font-Cormorant font-semibold">
            Awards & Recognition
          </h3>
          <img src={spoon} alt="" />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-6xl text-primary font-Cormorant font-semibold mb-12"
          variants={variant}
          initial="hidden"
          animate={aniControl}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          Our Laurels
        </motion.h1>
        <motion.div
          variants={variant}
          initial='hidden'
          animate={aniControl}
          transition={{delay : 2, duration : 2}}
        >
          <AwardCard />
        </motion.div>
      </div>
      <motion.div className="w-full xl:w-[40%]"
        variants={imgVariant}
        initial='hidden'
        animate={imgControl}
      >
        <img src={laurel} alt="" />
      </motion.div>
    </div>
  );
};

export default Awards;
