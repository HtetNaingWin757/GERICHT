import React from "react";
import spoon from "../../assets/spoon.png";
import home from "../../assets/welcome.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      id="home"
      className=" py-28 px-7 md:py-20 md:px-16 bg-black grid grid-cols-1 xl:grid-cols-2 xl:justify-items-center xl:items-center"
    >
      <div className="w-full xl:w-4/5 flex flex-col justify-center gap-10">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="w-full"
        >
          <h3 className=" font-Cormorant font-semibold text-xl md:text-2xl text-white">
            Chase The New Flavour{" "}
          </h3>
          <img src={spoon} alt="" />
        </motion.div>
        <div className="xl:my-[-10px] font-Cormorant leading-loose text-5xl md:text-8xl text-primary font-bold tracking-wide">
          <motion.h1
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.7, duration: 2 }}
          >
            The Key To Fine Dining
          </motion.h1>
        </div>
        <motion.p
          className=" text-sm md:text-lg text-white"
          initial={{ x: -850 }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
          Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
          Aliquam Amet Tellus
        </motion.p>
        <motion.button
          className="btn transition-all duration-300 ease-linear w-[50%] md:w-[30%] font-Cormorant py-3 bg-btn rounded-md text-black font-semibold"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ delay: 2.7, duration: 1.5 }}
        >
          Explore Menu
        </motion.button>
      </div>
      <div className="w-full md:w-full xl:w-4/5">
        <motion.img
          src={home}
          className=" pt-20 xl:py-0 md:w-full w-[450px]"
          alt=""
          initial={{  scale : 0  }}
          animate={{ scale : 1 }}
          
          transition={{ delay: 3, duration: 3 , ease : 'linear' }}
        />
      </div>
    </div>
  );
};

export default Home;
