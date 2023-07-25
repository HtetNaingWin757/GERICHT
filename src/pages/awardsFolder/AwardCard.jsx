import React from "react";
import awards from "../../pagedata/awardData.js";

// flex flex-col md:justify-between items-center flex-wrap xl:flex-row-reverse gap-10

const AwardCard = () => {
  return (
    <div className="w-full mb-16 mb:mb-0 flex flex-wrap items-center xl:flex-row-reverse gap-10">
      {awards.map((award, index) => {
        return (
          <div key={index} className=" flex w-full md:w-80 xl:w-72 gap-5 items-start">
            <img className="w-12 md:w-14" src={award.photo} alt="" />
            <div>
              <h2 className=" text-primary font-Cormorant font-semibold text-base md:text-xl">
                {award.header}
              </h2>
              <p className=" text-white text-xs md:text-base font-OpenSan">{award.lorem}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AwardCard;
