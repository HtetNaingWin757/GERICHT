import React, { useState } from "react";
import navItems from "../pagedata/navData";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/gericht.png";
import spoon from "../assets/spoon.png";
import { VscThreeBars } from "react-icons/vsc";


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AnimatePresence>
      <div>
        {/* nobileNavbar */}

        <div
          className={`${
            showMenu ? "translate-y-0" : "translate-y-[-100vh]"
          } transition-all duration-500 fixed top-0 left-0 z-[100] w-screen h-screen bg-black`}
        >
          <div
            onClick={menuHandler}
            className=" absolute right-5 w-7 top-10 cursor-pointer"
          >
            <img src={spoon} className=" rotate-[-45deg]" alt="" />
            <img
              src={spoon}
              className=" rotate-[-135deg] translate-y-[-7px]"
              alt=""
            />
          </div>
          <div className=" flex gap-10 flex-col justify-center items-center h-full">
            {navItems.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={1000}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className=" cursor-pointer text-primary text-3xl font-Cormorant"
                    onClick={menuHandler}
                  >
                    <h1>{item.name}</h1>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* desktopNavbar */}
        <motion.div className="p-3 border-white md:border-b xl:border-0 md:px-7 md:py-3 bg-black">
          <motion.div className=" flex flex-wrap justify-between items-center">
            <motion.div
              className="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
            >
              <img src={logo} className=" w-28 md:w-36" alt="" />
            </motion.div>
            <div className=" d-none lg:flex flex-wrap items-center gap-10">
              {navItems.map((item) => {
                return (
                  <div key={item.id}>
                    <Link
                      to={item.link}
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={50}
                      duration={500}
                      delay={1000}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                      spyThrottle={500}
                      className=" cursor-pointer text-white transition-all duration-500 hover:text-[#a5a5a5] font-OpenSan"
                    >
                      <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 2 }}
                      >
                        {item.name}
                      </motion.h1>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className=" d-none md:flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
              >
                <Link
                  to="login"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className=" cursor-pointer border-b py-3 transition-all duration-500 border-black hover:border-[#777373ad] relative z-0 text-white font-OpenSan"
                >
                  Log In / Registration
                </Link>
              </motion.div>
              <motion.div
                className=" py-4 border-s border-[#e2e1e19f]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 2 }}
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
              >
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className=" cursor-pointer border-b py-3 transition-all duration-500 border-black hover:border-[#777373ad] relative z-0 text-white font-OpenSan"
                >
                  Book Title
                </Link>
              </motion.div>
            </div>
            <motion.div
              className=" xl:d-none text-white text-3xl"
              onClick={menuHandler}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
            >
              <VscThreeBars />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Nav;
