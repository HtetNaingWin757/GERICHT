import React, { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { animateScroll as scroll } from "react-scroll";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" fixed bottom-5 right-5 xl:bottom-[40px] xl:right-[40px] z-50">
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-[1]" : "opacity-0"
        } btn duration-[0.7s] hover:text-sm transition-opacity text-base w-10 h-10 xl:text-xl xl:w-16 xl:h-16 flex justify-center items-center bg-btn text-black`}
      >
        <SlArrowUp />
      </button>
    </div>
  );
};

export default ScrollTop;
