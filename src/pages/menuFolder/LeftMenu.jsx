import React, { useEffect, useRef } from "react";
import data from "../../pagedata/menuData";
import { motion, useAnimation, useInView } from "framer-motion";

const header = {
  hidden: {
    opacity: 0,
    scale: 2,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const menuVariants = {
    hidden : {
        opacity : 0,
        scale : 1.3
    },
    show : {
        opacity : 1,
        scale : 1,
        transition : {
            delay : 2,
            duration : 1
        }
    }
}

const LeftMenu = () => {
  const menuItems = data.firstMenu;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const headerAni = useAnimation();
  const menuAni = useAnimation()

  useEffect(() => {
    if (isInView) {
      headerAni.start("show");
      menuAni.start('show')
    }
  }, [isInView]);

  return (
    <div ref={ref} className="flex flex-col justify-center items-center gap-16">
      <motion.h1
        className="text-3xl md:text-5xl font-Cormorant font-semibold text-white"
        variants={header}
        initial="hidden"
        animate={headerAni}
      >
        Wine & Beer
      </motion.h1>
      <motion.div className="md:w-full flex flex-col gap-7"
        variants={menuVariants}
        initial="hidden"
        animate={menuAni}
      >
        {menuItems.map((item, index) => {
          return (
            <div key={index} className=" flex flex-col gap-3">
              <div className=" flex justify-between items-center gap-7">
                <h4 className=" text-primary whitespace-nowrap font-Cormorant font-semibold text-xl md:text-2xl">
                  {item.name}
                </h4>
                <div className=" flex justify-center items-center gap-5">
                  <div className=" py-1 w-20 border-b-[1px] border-primary"></div>
                  <h4 className=" text-white font-Cormorant font-semibold text-3xl">
                    {item.price}
                  </h4>
                </div>
              </div>
              <div className=" flex gap-3 items-center">
                <h2 className="text-sm md:text-lg font-OpenSan font-thin text-secondary">
                  {item.category1}
                </h2>
                <div className=" w-[1px] h-[20px] border-s border-secondary"></div>
                <h2 className="text-sm md:text-lg font-OpenSan font-thin text-secondary">
                  {item.category2}
                </h2>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LeftMenu;
