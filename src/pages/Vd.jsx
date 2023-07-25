import React, { useEffect, useRef, useState } from "react";
import meal from "../assets/meal.mp4";
import { FaPlay } from "react-icons/fa";
import { GiPauseButton } from "react-icons/gi";

const Vd = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="overflow-hidden flex justify-center items-center w-screen z-0 video-wrapper relative xl:h-[600px]">
        <video ref={videoRef} loop src={meal}></video>
        <button
          onClick={handlePlay}
          className=" absolute w-12 h-12 md:w-24 md:h-24 z-10 rounded-full flex justify-center text-white items-center border-[1.5px] border-primary"
        >
          {isPlaying ? (
            <GiPauseButton className=" md:text-2xl " />
          ) : (
            <FaPlay className=" md:text-2xl ms-1" />
          )}
        </button>
    </div>
  );
};

export default Vd;
