import React from "react";
import { GlareCard } from "../ui/glare-card";
import { IoBug } from "react-icons/io5";

const BountyCard = () => {
  return (
    <GlareCard className="flex flex-col p-8">
      <div className="flex flex-row items-center justify-center">
        <div className="flex justify-center items-center p-2 bg-white/20 rounded-[12px]  w-fit">
          <IoBug className=" text-color-7 w-6 h-6" />
        </div>
        <p className=" ml-4 text-[1rem] text-color-7 max-w-3xl  mb-6 lg:mb-8">
          Deonorla
        </p>
      </div>
    </GlareCard>
  );
};

export default BountyCard;
