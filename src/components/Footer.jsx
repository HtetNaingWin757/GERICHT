import React, { useEffect, useRef } from "react";
import logo from "../assets/gericht.png";
import spoon from "../assets/spoon.png";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { useAnimation, useInView, motion } from "framer-motion";

const mainVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainAni = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainAni.start("show");
    }
  }, [isInView]);

  return (
    <div ref={ref} className=" pt-24 pb-32">
      <div className=" flex flex-col xl:flex-row justify-center items-center xl:items-start gap-20">
        <motion.div
          className=" flex flex-col justify-center items-center"
          variants={mainVariants}
          initial="hidden"
          animate={mainAni}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <h1 className="mb-5 text-3xl font-Cormorant text-white font-thin">
            Contact Us
          </h1>
          <p className="mb-1 text-md font-OpenSan text-white">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="mb-1 text-md font-OpenSan text-white">
            +1 212-344-1230
          </p>
          <p className="mb-1 text-md font-OpenSan text-white">
            +1 212-555-1230
          </p>
        </motion.div>
        <motion.div
          className=" flex flex-col justify-center items-center"
          variants={mainVariants}
          initial="hidden"
          animate={mainAni}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <img src={logo} className=" w-40 mb-5" alt="" />
          <p className="mb-3 text-md font-OpenSan text-white">
            "The Best Way To Find Yourself Is To <br /> Lose Yourself In The
            Service Of Others."
          </p>
          <img src={spoon} alt="" />
          <div className="mt-5 flex justify-center items-center gap-3">
            <FiFacebook className=" hover:text-primary text-white text-2xl" />
            <FiTwitter className=" hover:text-primary text-white text-2xl" />
            <FiInstagram className=" hover:text-primary text-white text-2xl" />
          </div>
        </motion.div>
        <motion.div
          className=" flex flex-col justify-center items-center"
          variants={mainVariants}
          initial="hidden"
          animate={mainAni}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <h1 className="mb-5 text-3xl font-Cormorant text-white font-thin">
            Working Hours
          </h1>
          <p className="mb-1 text-md font-OpenSan text-white">Monday-Friday:</p>
          <p className="mb-5 text-md font-OpenSan text-white">
            08:00 Am - 12:00 Am
          </p>
          <p className="mb-1 text-md font-OpenSan text-white">
            MSaturday-Sunday:
          </p>
          <p className="mb-1 text-md font-OpenSan text-white">
            07:00 Am - 11:00 Pm
          </p>
        </motion.div>
      </div>
      <motion.div
        className="mt-24 flex justify-center items-center"
        variants={mainVariants}
        initial="hidden"
        animate={mainAni}
        transition={{ delay: 2.5, duration: 1.5 }}
      >
        <p className=" tracking-wide text-md font-OpenSan text-white">
          2021 Gericht. All Rights Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
